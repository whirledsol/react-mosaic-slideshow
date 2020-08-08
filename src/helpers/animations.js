import React from 'react';
import { motion } from 'framer-motion';

export const FadeVariants = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
};

export const FadeMosaic = ({stagger=0.4, duration=0.6, animate='visible', children}) => (
    <motion.div
        initial="hidden"
        animate={animate}
        variants={FadeVariants}
        transition={{staggerChildren: stagger,duration: duration}}
        style={{height:'100%'}}
        children={children}
    />
);