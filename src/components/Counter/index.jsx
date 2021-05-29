import React, { useState, useEffect } from 'react';
import StepControls from "./StepControls";
import Button from "./Button";
import Display from './Display';
import AutoControls from './AutoControls';
import style from "./Counter.module.scss";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [isIncrement, setIncrement] = useState(true);
  const [isAuto, setIsAuto] = useState(false);
  const [frequency, setFrequency] = useState(1);

  const autoClick = () => {
    setCounter(counter + (isIncrement ? step : -step));
  };

  useEffect(() => {
    let interval = null;
    if (isAuto) {
      interval = setInterval(autoClick, 1000 / frequency);
    };
    return () => { clearInterval(interval) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuto, counter, frequency]);

  return (
    <div className={style.counter}>
      <Display counter={counter} />
      <StepControls setStep={setStep} step={step} setDirection={setIncrement} isIncrement={isIncrement} />
      <Button handler={() => { setCounter(counter + (isIncrement ? step : -step)) }} text="Count" />
      <AutoControls handler={() => { setIsAuto(!isAuto) }} text={(isAuto ? 'stop' : 'start') + ' auto click'} setFrequency={setFrequency} frequency={frequency} />
    </div>
  );
};
export default Counter;