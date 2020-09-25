function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { motion } from 'framer-motion';
export const FadeMosaicVariants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
export const AnimationWrapper = props => {
  var _props$initial, _props$animate;

  return /*#__PURE__*/React.createElement(motion.div, _extends({
    initial: (_props$initial = props.initial) !== null && _props$initial !== void 0 ? _props$initial : "hidden",
    style: {
      height: '100%'
    } //required for content to match slideshow
    ,
    animate: (_props$animate = props.animate) !== null && _props$animate !== void 0 ? _props$animate : 'visible',
    variants: FadeMosaicVariants //shouldn't have to do this but I believe framer-motion has a bug which ignores transition at this level
    ,
    transition: {
      duration: 0.7,
      staggerChildren: 0.4
    }
  }, props));
};