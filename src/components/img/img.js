import PropTypes from 'prop-types';
import React from 'react';

/**
 * Image, with fall back if it does not load.
 *
 * @param {string} src - the url of the image to load
 * @param {string} fallbackSrc - the Fall Back image url if the image fails to load
 * @param {*} other - rest to pass through anymore parameters.
 * @returns {HTML}
 * @constructor
 */
const Img = ({src, fallbackSrc, ...other}) => {
  let element;
  const changeSrc = newSrc => {
    element.src = newSrc;
  };
  return (
    <img src={src}
         className="img-responsive"
         onError={() => changeSrc(fallbackSrc)}
         ref={el => element = el}
         {...other} />
  );
};

Img.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string
};

export default Img;

