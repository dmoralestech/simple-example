import PropTypes from 'prop-types';
import React from 'react';

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

