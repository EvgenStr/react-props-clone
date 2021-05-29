import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

function Button({ handler, text }) {
  return (
    <button className={styles.button} onClick={handler}>{text}</button>
  );
};
export default Button;

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};