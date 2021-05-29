import React from 'react';
import PropTypes from 'prop-types';

function Input({ handler, value }) {
  return (
    <div>
      <input type="number" value={value} onChange={(e) => { handler(e) }} />
    </div>
  );
};
export default Input;

Input.defaultProps = {
  value: 1,
};

Input.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};