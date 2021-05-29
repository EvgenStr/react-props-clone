import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.scss';

function Display({ counter }) {
  return (
    <div className={styles.display}>Counter: {counter}</div>
  );
};
export default Display;

Display.defaultProps = {
  counter: 0,
};

Display.propTypes = {
  counter: PropTypes.number,
};