import React, { useState, useEffect } from 'react';
import Playbar from './helpers/Playbar';
import { SlideshowWrapper } from './helpers/slideshows';
import useViewportWidth from './helpers/useViewportWidth';
import { useMotionValue } from 'framer-motion';

const getChildIndex = (position, slideLength) => {
  return Math.floor(position / slideLength);
};

const Slideshow = props => {
  //deconstruct props, remember: animation is controlled by the children
  const {
    children,
    //sequental <Slide>s with animations
    height = '500px',
    //the height of the Slideshow
    slideDuration = 5 * 1000,
    //duration of each slide in ms
    autoplayRestartDelay = 5 * 1000,
    //the delay when tapped to restart autoplay, 0 to disable
    playbarHeight = 7,
    //the height of the playbar in px
    playbarPosition = 'top',
    //the position of the playbar (e.g. top, bottom),
    playbarColor = '#ffffff' //the color of the playbar without alpha

  } = props; //number of slides

  const slideCount = children.length; //whole buncha variables

  const [autoplay, setAutoplay] = useState(true); //the timestamp of the last tap to restart autoplay

  const [autoplayQueued, setAutoplayQueued] = useState(0); //the position in the slideshow

  const [idx, setIdx] = useState(0); //prevents loading of last slide initially

  const [firstLoad, setFirstLoad] = useState(true); //viewport hook, will change but needs to alert the effects

  const viewportWidth = useViewportWidth(); //the playbar position

  const playbarX = useMotionValue(0); //the length on the playbar per slide

  const slideLength = viewportWidth / slideCount; //the interval delay to give us the slideDuration we need

  const intervalSpeed = slideDuration / slideLength; //Playbar Location Change Update

  useEffect(_ => {
    const unsubscribeX = playbarX.onChange(_ => {
      let position = playbarX.get() + viewportWidth;
      let newIdx = getChildIndex(position, slideLength);

      if (firstLoad && idx !== newIdx) {
        setFirstLoad(false);
      }

      setIdx(newIdx);
    });
    return () => {
      unsubscribeX();
    };
  }, [viewportWidth]); //Autoplay Interval

  useEffect(_ => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      let value = playbarX.get();
      value = (value + viewportWidth) % viewportWidth + 1 - viewportWidth;
      playbarX.set(value);
    }, intervalSpeed);
    return () => clearInterval(interval);
  }, [autoplay, viewportWidth]); //Autoplay Restart Interval

  useEffect(_ => {
    if (autoplay || !autoplayRestartDelay) return;
    const autoplayRestart = setTimeout(() => {
      setAutoplay(true);
    }, autoplayRestartDelay);
    return () => clearTimeout(autoplayRestart);
  }, [autoplayQueued, viewportWidth]); //Tap Callback

  const onPlaybarTap = (e, {
    point
  }) => {
    setAutoplay(false);
    setAutoplayQueued(new Date().getTime()); //set with time so that the effect will hit each time

    let position = point.x - viewportWidth;
    playbarX.set(position);
  };

  return /*#__PURE__*/React.createElement(SlideshowWrapper, {
    height: height
  }, playbarHeight > 0 && /*#__PURE__*/React.createElement(Playbar, {
    onTap: onPlaybarTap,
    height: playbarHeight,
    position: playbarPosition,
    x: playbarX,
    color: playbarColor
  }), !firstLoad && children[(idx - 1 + slideCount) % slideCount], children[idx]);
};

export default Slideshow;