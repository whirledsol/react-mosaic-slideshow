import React from 'react';
import MosaicSlideshow from './MosaicSlideshow';
import {MosaicImage} from './helpers/mosaic-styles';

function App() {
  const PUBLIC = '../../../';
  const Slide1 = (
    <div class="row no-gutters">
      <div className="col">
        <MosaicImage className="w-33"
        src={`${PUBLIC}images/1.JPG`}
        />
        <MosaicImage className="w-33"
        src={`${PUBLIC}images/3.JPG`}
        />
        <MosaicImage className="w-33"
        src={`${PUBLIC}images/4.JPG`}
        />
      </div>
      <MosaicImage className="col" src={`${PUBLIC}images/2.JPG`} />
    </div>
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
