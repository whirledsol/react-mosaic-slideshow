import React from 'react';
import MosaicSlideshow from './MosaicSlideshow';
import { MosaicRow, MosaicCol, MosaicStack, MosaicImage } from './helpers/mosaic-styles';
import {FadeVariants} from './helpers/animations';
function App() {
  const PUBLIC = '../../../';
  const Slide1 = (
    <MosaicRow>
      <MosaicCol>
        <MosaicStack height="33%" variants={FadeVariants} src={`${PUBLIC}images/1.JPG`} />
        <MosaicStack height="33%" variants={FadeVariants} src={`${PUBLIC}images/3.JPG`} />
        <MosaicStack height="34%" variants={FadeVariants} src={`${PUBLIC}images/4.JPG`} />
      </MosaicCol>
      <MosaicCol variants={FadeVariants} src={`${PUBLIC}images/2.JPG`}>
      </MosaicCol>
    </MosaicRow>
  );

  const Slide2 = (
    <div>
      not showing yet
    </div>
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
