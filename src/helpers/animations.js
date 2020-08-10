import React from 'react';
import { motion } from 'framer-motion';

export const FadeMosaicVariants = {
    visible: {
        opacity: 1,
        transition:{staggerChildren: 0.3,duration: 0.6}
    },
    hidden: {
        opacity: 0
    }
};

export const FadeMosaic = (props) => {
    return(
    <motion.div
        initial="hidden"
        variants={FadeMosaicVariants}
        style={{height:'100%'}} //required for content to match slideshow
        animate={props.animate ?? 'visible'}
        {...props}
    />);
};