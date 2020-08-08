import React from 'react';
import {FadeMosaic} from './helpers/animations';
import {SlideshowWrapper} from './helpers/slideshow-styles';

const MosaicSlideshow = (props) =>{
    const {
        children,
        height='500px',
        animation=FadeMosaic,
        interval=5*1000,
        playbarSize=3
    } = props;
    const slideCount = children.length;
    const Animation = animation;

    return (
        <SlideshowWrapper height={height}>
            <FadeMosaic animate={'visible'}>{children[0]}</FadeMosaic>
        </SlideshowWrapper>
    );
}

export default MosaicSlideshow;
