import React,{useState} from 'react';
import {motion,useMotionValue} from 'framer-motion';
import styled from 'styled-components';
import {rgba} from './colors';

const PlaybarBar = styled.div`
    background-color:${p=>rgba(p.color,20)};
    height:${p=>(p.height)}px;
    transition: height 200ms;
`;

const PlaybarContainer = styled(motion.div)`
    position:absolute;
    z-index:100;
    ${p=>p.position}:0;
    left:0;
    height:${p=>3*p.height}px;
    width:100%;
    cursor:pointer;
    &:hover > ${PlaybarBar}{
        height:100%;
    }
`;

const PlaybarSlider = styled(motion.div)`
    height:100%;
    transition: height 200ms;
    background-color:${p=>rgba(p.color,75)};
`;

const Playbar = (props)=>{
    const {
        onTap, //onTap for updates
        height=10, //base height, hover is 3*height
        position='top', //locaiton of the playbar relative to parent
        x=0, //the x position
        color='#ffffff' //base color, alpha added
    } = props

    return (<PlaybarContainer
        onTap={onTap}
        position={position}
        height={height}>
            <PlaybarBar height={height} color={color}>
                <PlaybarSlider
                    style={{ x }} 
                    color={color}
                />
            </PlaybarBar>
        </PlaybarContainer>);
}

export default Playbar