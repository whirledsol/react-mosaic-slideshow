import React from 'react';
import {FadeMosaic} from './helpers/animations';
import {SlideshowWrapper} from './helpers/slideshow-styles';

const MosaicSlideshow = (props) =>{
    const {
        children,
        height='800px',
        animation=FadeMosaic,
        interval=5*1000,
        playbar=3
    } = props;
    const slideCount = children.length;
    const Animation = animation;

    return (
        <SlideshowWrapper height={height}>
            {children[0]}
        </SlideshowWrapper>
    );
}

export default MosaicSlideshow;
