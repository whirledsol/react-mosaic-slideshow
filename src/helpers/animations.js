import React from 'react';
import { motion } from 'framer-motion';

export const FadeVariants = ({duration=0.6,stagger=0})=> ({
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: stagger,
            duration: duration
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: stagger,
            duration: duration
        }
    },
});

export const FadeMosaic = ({stagger=0.2}) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={FadeVariants(stagger)}
    />
);