import React,{useState,useEffect} from 'react';
import {FadeMosaic} from './helpers/animations';
import Playbar from './helpers/Playbar';
import {SlideshowWrapper} from './helpers/slideshow-styles';
import useViewportWidth from './helpers/useViewportWidth';
import {useMotionValue} from 'framer-motion';


const getChildIndex = (position,slideLength) =>{
    return Math.floor(position/slideLength);
};

const MosaicSlideshow = (props) =>{
    const {
        children,
        height='500px',
        animation=FadeMosaic,
        slideDuration=5*1000,
        playbarHeight=7,
        playbarPosition='top'
    } = props;
    const slideCount = children.length;
    const Animation = animation;

    const viewportWidth = useViewportWidth();
    const playbarX = useMotionValue(0);
    const slideLength = viewportWidth/slideCount;
    const intervalSpeed = slideDuration/slideLength;

    const PlaybarUpdate = function(){
        let value = playbarX.get();
        //console.log('update',value)
        value = (value + viewportWidth) % viewportWidth + 1 - viewportWidth;
        playbarX.set(value);
    };
    const autoPlay = () =>{
        return setInterval(PlaybarUpdate,intervalSpeed);
    };

    const [interval,_]= useState(autoPlay);
    const [idx,setIdx] = useState(0);
    const onPlaybarTap = (e,{point})=>{
        clearInterval(interval);
        let position = point.x-viewportWidth;
        playbarX.set(position);
    }
    
    useEffect(()=>{
        const unsubscribeX = playbarX.onChange(_=>{
            let position = playbarX.get() + viewportWidth;
            
            let newIdx = getChildIndex(position,slideLength);
            setIdx(newIdx);
        });
        return () => {
            unsubscribeX()
        }
    },[]);

    return (
        <SlideshowWrapper height={height}>
            <Playbar
                onTap={onPlaybarTap}
                height={playbarHeight}
                position={playbarPosition}
                x={playbarX}
            />
            <Animation animate={'visible'}>
                {children[idx]}
            </Animation>
        </SlideshowWrapper>
    );
}

export default MosaicSlideshow;
