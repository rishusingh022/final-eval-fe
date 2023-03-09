import React from 'react';
import './Circle.css';
import PropTypes from 'prop-types';
function Circle(prop) {
  return (
    <div
      style={{
        top: prop.TOP,
        right: prop.RIGHT,
        height: prop.HEIGHT,
        width: prop.WEIGHT,
      }}
      className="circle"
    ></div>
  );
}

export default Circle;

Circle.propTypes = {
  TOP: PropTypes.string,
  RIGHT: PropTypes.string,
  HEIGHT: PropTypes.string,
  WEIGHT: PropTypes.string,
};
