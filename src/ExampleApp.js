import React from 'react';
import Slideshow from './components/Slideshow';
import { MosaicRow, MosaicCol, MosaicStack,MosaicGridWrapper,MosaicGridItem } from './components/helpers/mosaics';
import { Slide } from './components/helpers/slideshows';
import { FadeMosaicVariants } from './components/helpers/animations';
import styled from 'styled-components';

const Header = styled.header`
  font-size:3rem;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  width:100%;
  text-align:center;
  margin:2rem 0;
`;

const Footer = styled.footer`
  background-color:#efefef;
  width:100%;
  padding:1rem;
  position:fixed;
  bottom:0;
  text-align:right;
`;

const MosaicFont = styled.div`
  font-size:2rem;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

function App() {
  const PUBLIC = process.env.PUBLIC_URL;

  const Slide1 = (
    <Slide key='slide1'>
        <MosaicGridWrapper rows={3} cols={2} mobileBreakpoint={"md"}>
            <MosaicGridItem col={1} variants={FadeMosaicVariants} src={`${PUBLIC}images/1.jpg`} />
            <MosaicGridItem col={1} variants={FadeMosaicVariants} src={`${PUBLIC}images/3.jpg`} />
            <MosaicGridItem col={1} variants={FadeMosaicVariants} src={`${PUBLIC}images/4.jpg`} />
            <MosaicGridItem rowspan={3} variants={FadeMosaicVariants} src={`${PUBLIC}images/2.jpg`} />
        </MosaicGridWrapper>
    </Slide>
  );

  const Slide2 = (
    <Slide key='slide2'>
        <MosaicRow>
          <MosaicCol variants={FadeMosaicVariants} src={`${PUBLIC}images/6.jpg`} />
          <MosaicCol>
            <MosaicStack height="33.3%" variants={FadeMosaicVariants} src={`${PUBLIC}images/5.jpg`} />
            <MosaicStack height="33.3%" variants={FadeMosaicVariants} src={`${PUBLIC}images/7.jpg`} />
            <MosaicStack height="33.4%" variants={FadeMosaicVariants} src={`${PUBLIC}images/8.jpg`} />
          </MosaicCol>
        </MosaicRow>
    </Slide>
  );

  const Slide3 = (
    <Slide key='slide3'>
        <MosaicRow>
          <MosaicCol
            className='col-6 col-md-8'
            variants={FadeMosaicVariants}
            src={`${PUBLIC}images/9.jpg`} />

          <MosaicCol className='col-3 col-md-2'>
            <MosaicStack
              height="50%"
              variants={FadeMosaicVariants}
              color="#A9E2F3"
              className='d-flex align-items-center justify-content-center'>
              <MosaicFont>Flowers</MosaicFont>
            </MosaicStack>
            <MosaicStack
              height="50%"
              variants={FadeMosaicVariants}
              src={`${PUBLIC}images/11.jpg`} />
          </MosaicCol>

          <MosaicCol className='col-3 col-md-2'>
            <MosaicStack
              height="50%"
              variants={FadeMosaicVariants}
              src={`${PUBLIC}images/10.jpg`} />
            <MosaicStack
              height="50%"
              variants={FadeMosaicVariants}
              color="#A9E2F3"
              className='d-flex align-items-center justify-content-center'>
              <MosaicFont>are pretty.</MosaicFont>
            </MosaicStack>
          </MosaicCol>
        </MosaicRow>
    </Slide>
  );

  
  return (
    <>
      <Header>React Mosaic Slideshow</Header>
      <section>
        <Slideshow mobileBreakpoint={'md'} autoplayRestartDelay={0}>
          {Slide1}
          {Slide2}
          {Slide3}
        </Slideshow>
      </section>
      <Footer>
        &copy;2020&nbsp;
        <a target='_blank' href="https://twitter.com/intent/tweet?text=%40whirledsol%20%23reactmosaicslideshow%20Hey%2C" data-size="large">@whirledsol</a>
      </Footer>
    </>
  );
}

export default App;
