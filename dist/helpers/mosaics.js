import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { parseBreakpoint } from './responsive';
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
const MosaicBaseMotion = styled(motion.div)(MosaicBaseStyleProps);

//a mosaic element which accepts an image (src), color (color), and animation (variants)
export const MosaicBase = props => {
  const MosaicBaseElement = props.variants ? MosaicBaseMotion : MosaicBaseStatic;
  return /*#__PURE__*/React.createElement(MosaicBaseElement, props);
};

//like bootstrap 'row'
export const MosaicRow = styled(MosaicBase)`
    width:100%;
    height:100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

//like bootstrap 'col' but allows className='col-*-*'
export const MosaicCol = styled(MosaicBase)`
    height:100%;
    padding-left:0;
    padding-right:0;
    ${p => {
  var _p$className;
  return !((_p$className = p.className) !== null && _p$className !== void 0 ? _p$className : '').startsWith('col') ? `
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    ` : '';
}}
`;

//Allows us to stack vertically, like rowspan
export const MosaicStack = styled(MosaicBase)`
    ${p => p.height && `height:${p.height};`}
`;
export const MosaicGridItem = styled(MosaicBase)`
    grid-column: span ${p => p.colspan || 1};
    grid-row: span ${p => p.rowspan || 1};
    ${p => p.col && `grid-column-start: ${p.col};`}
    ${p => p.row && `grid-row-start: ${p => p.row};`}
`;
export const MosaicGridWrapper = styled.div`
    display: grid;
    @media (min-width: ${p => parseBreakpoint(p.mobileBreakpoint)}px) {
        grid-template-columns: repeat(${p => p.cols}, 1fr);
        -ms-grid-columns: (1fr)[${p => p.cols}];
        grid-template-rows: repeat(${p => p.rows}, 1fr);
    }
    grid-auto-flow: dense;
    height:100%;  

   
`;