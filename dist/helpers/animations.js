function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { motion } from 'framer-motion';
export const FadeMosaicVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6
    }
  },
  hidden: {
    opacity: 0
  }
};
export const FadeMosaic = props => {
  var _props$animate;

  return /*#__PURE__*/React.createElement(motion.div, _extends({
    initial: "hidden",
    variants: FadeMosaicVariants,
    style: {
      height: '100%'
    } //required for content to match slideshow
    ,
    animate: (_props$animate = props.animate) !== null && _props$animate !== void 0 ? _props$animate : 'visible'
  }, props));
};