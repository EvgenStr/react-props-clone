import React from 'react';
import PropTypes from 'prop-types';

function Display({ counter }) {
  return (
    <div>Counter: {counter}</div>
  );
};
export default Display;

Display.defaultProps = {
  counter: 0,
};

Display.propTypes = {
  counter: PropTypes.number,
};