import React from 'react';
import MosaicSlideshow from './MosaicSlideshow';
import { MosaicRow, MosaicCol, MosaicStack } from './helpers/mosaic-styles';
import {FadeVariants} from './helpers/animations';
function App() {
  const PUBLIC = '../../../';
  const Slide1 = (
    <MosaicRow>
      <MosaicCol>
        <MosaicStack height="33%" variants={FadeVariants} src={`${PUBLIC}images/1.jpg`} />
        <MosaicStack height="33%" variants={FadeVariants} src={`${PUBLIC}images/3.jpg`} />
        <MosaicStack height="34%" variants={FadeVariants} src={`${PUBLIC}images/4.jpg`} />
      </MosaicCol>
      <MosaicCol variants={FadeVariants} src={`${PUBLIC}images/2.jpg`}>
      </MosaicCol>
    </MosaicRow>
  );

  const Slide2 = (
    <MosaicRow>

      <MosaicCol variants={FadeVariants} src={`${PUBLIC}images/6.jpg`}>
      </MosaicCol>
      <MosaicCol>
        <MosaicStack height="33%" variants={FadeVariants} src={`${PUBLIC}images/5.jpg`} />
        <MosaicStack height="33%" variants={FadeVariants} src={`${PUBLIC}images/7.jpg`} />
        <MosaicStack height="34%" variants={FadeVariants} src={`${PUBLIC}images/8.jpg`} />
      </MosaicCol>
    </MosaicRow>
  );
  return (
    <>
      <header className="text-center">
        <h1>Mosaic Slideshow</h1>
      </header>
      <section>
        <MosaicSlideshow>
          {Slide1}
          {Slide2}
        </MosaicSlideshow>
      </section>
    </>
  );
}

export default App;
