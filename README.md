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
        height={...}
        slideDuration={...}
        autoplayRestartDelay={...}
        playbarHeight={...}
        playbarPosition={...}
        playbarColor={...}
        animation={}
    >
        ...
    </Slideshow>
```