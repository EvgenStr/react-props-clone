import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import styles from "./StepControls.module.scss"

function StepControls({ setStep, step, setDirection, isIncrement }) {

  const setStepToParent = ({ target: { value } }) => {
    const validStep = (+value > 0) ? +value : 1;
    setStep(validStep);
  };

  const changeDirection = () => {
    setDirection(!isIncrement);
    setStep(step);
  };

  return (
    <div className={styles.controls}>
      <Input value={step} handler={setStepToParent} />
      <Button handler={changeDirection} text="Change direction" />
    </div>
  );
}
export default StepControls;

StepControls.defaultProps = {
  isIncrement: true,
  step: 1,
};

StepControls.propTypes = {
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  setDirection: PropTypes.func.isRequired,
  isIncrement: PropTypes.bool.isRequired,
};