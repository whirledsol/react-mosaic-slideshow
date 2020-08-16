import React from 'react';
import { motion } from 'framer-motion';

export const FadeMosaicVariants = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0,
    }
};

export const AnimationWrapper = (props) => {
    return(
    <motion.div
        initial={props.initial ?? "hidden"}
        style={{height:'100%'}} //required for content to match slideshow
        animate={props.animate ?? 'visible'}
        variants={FadeMosaicVariants} //shouldn't have to do this but I believe framer-motion has a bug which ignores transition at this level
        transition={{duration:0.7,staggerChildren: 0.4}}
        {...props}
    />);
};