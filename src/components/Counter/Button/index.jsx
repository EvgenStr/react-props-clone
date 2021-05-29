import React from 'react';
import PropTypes from 'prop-types';

function Button({ handler, text }) {
  return (
    <button onClick={handler}>{text}</button>
  );
};
export default Button;

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};