import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import styles from './AutoControls.module.scss';

function AutoControls({ handler, text, setFrequency, frequency }) {
  const minFrequency = 1;
  const maxFrequency = 100;

  const setFrequencyToParent = ({ target: { value } }) => {
    if (+value < minFrequency || +value > maxFrequency) return;
    setFrequency(+value);
  };

  return (
    <div className={styles.autoControls}>
      <span>Set frequency from {minFrequency} to {maxFrequency}</span>
      <Input value={frequency} handler={setFrequencyToParent} />
      <Button handler={handler} text={text} />
    </div>
  );
};
export default AutoControls;

AutoControls.defaultProps = {
  frequency: 1,
};

AutoControls.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setFrequency: PropTypes.func.isRequired,
  frequency: PropTypes.number.isRequired,
};