import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MosaicBaseStyleProps = p => `
    position: relative;

    ${p.color ? `
        background-color:${p.color};
    ` : ''}

    ${p.src ? `
        background-image:url(${p.src});
        background-position: center; 
        background-repeat: repeat; 
        background-size: cover;
    ` : ''}
`;

const MosaicBaseStatic = styled.div(MosaicBaseStyleProps);
const MosaicBaseMotion = styled(motion.div)(MosaicBaseStyleProps); //a mosaic element which accepts an image (src), color (color), and animation (variants)

const MosaicBase = props => {
  const MosaicBaseElement = props.variants ? MosaicBaseMotion : MosaicBaseStatic;
  return /*#__PURE__*/React.createElement(MosaicBaseElement, props);
}; //like bootstrap 'row'


export const MosaicRow = styled(MosaicBase)`
    width:100%;
    height:100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`; //like bootstrap 'col' but allows className='col-*-*'

export const MosaicCol = styled(MosaicBase)`
    height:100%;
    padding-left:0;
    padding-right:0;
    ${p => !(p.className ?? '').startsWith('col') ? `
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    ` : ''}
`; //Allows us to stack vertically, like rowspan

export const MosaicStack = styled(MosaicBase)`
    ${p => p.height && `height:${p.height};`}
`;