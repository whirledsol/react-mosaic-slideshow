import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const MosaicBaseStyleProps = (p) => (`
    position: relative;
    
    ${p.color?`
        background-color:${p.color};
    `:''}

    ${p.src ? `
        background-image:url(${p.src});
        background-position: center; 
        background-repeat: repeat; 
        background-size: cover;
    `:''}
`);

const MosaicBaseStatic = styled.div(MosaicBaseStyleProps);
const MosaicBaseMotion = styled(motion.div)(MosaicBaseStyleProps);
const MosaicBase = (props)=>{
    const MosaicBaseElement = props.variants ? MosaicBaseMotion: MosaicBaseStatic;
    return(
        <MosaicBaseElement {...props} />
    );
}

export const MosaicRow = styled(MosaicBase)`
    width:100%;
    height:100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

export const MosaicCol = styled(MosaicBase)`
    height:100%;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    ${p=> p.width > 0 && `
        -ms-flex: 0 0 ${p.width/12}%;
        flex: 0 0 ${p.width/12}%;
        max-width: ${p.width/12}%;
    `}
`;

export const MosaicStack = styled(MosaicBase)`
    ${p=>p.height && `height:${p.height};` }
`;