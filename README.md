# React Mosaic Slideshow

## Overview
This was built for the need to show a good ol'-fashioned javascript slideshow in React. It allows for control using a YouTubesque playbar. Animation and content are controlled by the implementing application so the slides can be greatly customizable, with helpers for a Mosaic design.

## Dependencies
- chromatism
- styled-components
- framer-motion
- bootstrap.css recommended (bootstrap.js discouraged)

## Use
I strongly recommend reviewing the sample ```App.js``` which shows three slides. The slide content uses helper components to get the styles right.

### Slide Example
```jsx
    const Slide1 = (
        <Slide key='slide1'> {*wrapper*}
            <MosaicRow> {*row*}
                <MosaicCol> {*col*}
                    <MosaicStack height={...} variants={...} src={...} /> {*stack*}
                    ...
                </MosaicCol>
                ...
            </MosaicRow>
            ...
        </Slide>
    );
```

### Calling the Slideshow
```jsx
    <Slideshow
        height={'500px'} //the height of the Slideshow
        slideDuration={5*1000} //duration of each slide in ms
        autoplayRestartDelay={5*1000} //the delay when tapped to restart autoplay, 0 to disable
        playbarHeight={7} //the height of the playbar in px
        playbarPosition={'top'} //the position of the playbar (e.g. top, bottom),
        playbarColor={'#ffffff'} //the color of the playbar. If no alpha, 20% will be applied. rgba will override this.
        mobileBreakpoint={0} //mobile view of 100vh will be applied until the window width hits this breakpoint (px or bs code)
        animation={AnimationWrapper} //animation wrapper,
    >
        //sequental <Slide>s with animations
    </Slideshow>
```

## Changes
### Log
|**version**|**Change**|**Breaking changes**|
|---|---|---|
|0.2.2|Added ```mobileBreakpoint``` and ```MosaicGrid...```style components.|None|

## Future Support
- More CSS Grid Support, including IE support with STYLIS
