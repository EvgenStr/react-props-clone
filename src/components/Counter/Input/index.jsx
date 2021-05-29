import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.module.scss";

function Input({ handler, value }) {
  return (
    <input className={styles.inputNum} type="number" value={value} onChange={(e) => { handler(e) }} />
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