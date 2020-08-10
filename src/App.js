import React from 'react';
import Slideshow from './Slideshow';
import { MosaicRow, MosaicCol, MosaicStack } from './helpers/mosaic-styles';
import { Slide } from './helpers/slideshow-styles';
import { FadeMosaic, FadeMosaicVariants } from './helpers/animations';
import styled from 'styled-components';

const Header = styled.div`
  font-size:3rem;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  width:100%;
  text-align:center;
  margin:2rem 0;
`;
const MosaicFont = styled.div`
  align-self: center;
  display:flex;
  width:100%;
  text-align:center;
  font-size:2rem;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

function App() {
  const PUBLIC = '../../../';
  const Slide1 = (
    <Slide key='slide1'>
      <FadeMosaic >
        <MosaicRow>
          <MosaicCol>
            <MosaicStack height="33.3%" variants={FadeMosaicVariants} src={`${PUBLIC}images/1.jpg`} />
            <MosaicStack height="33.3%" variants={FadeMosaicVariants} src={`${PUBLIC}images/3.jpg`} />
            <MosaicStack height="33.4%" variants={FadeMosaicVariants} src={`${PUBLIC}images/4.jpg`} />
          </MosaicCol>
          <MosaicCol variants={FadeMosaicVariants} src={`${PUBLIC}images/2.jpg`}>
          </MosaicCol>
        </MosaicRow>
      </FadeMosaic>
    </Slide>
  );

  const Slide2 = (
    <Slide key='slide2'>
      <FadeMosaic >
        <MosaicRow>
          <MosaicCol variants={FadeMosaicVariants} src={`${PUBLIC}images/6.jpg`} />
          <MosaicCol>
            <MosaicStack height="33.3%" variants={FadeMosaicVariants} src={`${PUBLIC}images/5.jpg`} />
            <MosaicStack height="33.3%" variants={FadeMosaicVariants} src={`${PUBLIC}images/7.jpg`} />
            <MosaicStack height="33.4%" variants={FadeMosaicVariants} src={`${PUBLIC}images/8.jpg`} />
          </MosaicCol>
        </MosaicRow>
      </FadeMosaic>
    </Slide>
  );

  const Slide3 = (
    <Slide key='slide3'>
      <FadeMosaic >
        <MosaicRow>
          <MosaicCol className='col-6 col-md-8' variants={FadeMosaicVariants} src={`${PUBLIC}images/9.jpg`} />
          <MosaicCol className='col-3 col-md-2'>
            <MosaicStack height="50%" variants={FadeMosaicVariants} color="#A9E2F3">
              <MosaicFont>Flowers</MosaicFont>
            </MosaicStack>
            <MosaicStack height="50%" variants={FadeMosaicVariants} src={`${PUBLIC}images/11.jpg`} />
          </MosaicCol>
          <MosaicCol className='col-3 col-md-2'>
            <MosaicStack height="50%" variants={FadeMosaicVariants} src={`${PUBLIC}images/10.jpg`} />
            <MosaicStack height="50%" variants={FadeMosaicVariants} color="#A9E2F3">
              <MosaicFont>are pretty.</MosaicFont>
            </MosaicStack>
          </MosaicCol>
        </MosaicRow>
      </FadeMosaic>
    </Slide>
  );
  return (
    <>
      <Header>Mosaic Slideshow</Header>
      <section>
        <Slideshow autoplayRepeatDelay={0}>
          {Slide1}
          {Slide2}
          {Slide3}
        </Slideshow>
      </section>
    </>
  );
}

export default App;
