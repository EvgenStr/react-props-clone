import React, { useState } from 'react';
import Button from '../Button';
import styles from "./Controls.module.scss"

function Controls(props) {
  const { setSteps, propStep, setDirection, direction } = props;
  const [step, setStep] = useState(propStep);

  const setStepToParent = ({ target: { value } }) => {
    const validStep = (+value > 0) ? +value : 1;
    setStep(validStep);
    setSteps(validStep);
  };
  const changeDirection = () => {
    setDirection(!direction);
    setStep(step)
    setSteps(step);

  }
  return (
    <div className={styles.controls}>
      <input type="number" value={step} onChange={setStepToParent} />
      <Button handler={changeDirection} text="Change direction" />
    </div>
  )
}
export default Controls;