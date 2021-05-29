import React, { useState, useEffect } from 'react';
import StepControls from "./StepControls";
import Button from "./Button";
import Display from './Display';
import style from "./Counter.module.scss";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [isIncrement, setIncrement] = useState(true);
  const [isAuto, setIsAuto] = useState(false);
  const autoClick = () => {
    setCounter(counter + (isIncrement ? step : -step));
  }

  useEffect(() => {
    let interval = null;
    if (isAuto) {
      interval = setInterval(autoClick, 1000)
    }
    return () => { clearInterval(interval) }
  }, [isAuto, counter])

  return (
    <div className={style.counter}>
      <Display counter={counter} />
      <StepControls setSteps={setStep} propStep={step} setDirection={setIncrement} direction={isIncrement} />
      <Button handler={() => { setCounter(counter + (isIncrement ? step : -step)) }} text="Count" />
      <Button handler={() => { setIsAuto(!isAuto) }} text={`${isAuto && 'stop'} auto click`} />
    </div>
  )
}
export default Counter;