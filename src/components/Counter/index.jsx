import React, { useState, useEffect } from 'react';
import Controls from "./Controls";
import style from "./Counter.module.scss";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(true);
  const [isAuto, setIsAuto] = useState(false);
  const autoClick = () => {
    setCounter(counter + (direction ? step : -step));
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
      <h1>Counter: {counter}</h1>
      <Controls setSteps={setStep} propStep={step} setDirection={setDirection} direction={direction} />
      <button onClick={() => { setCounter(counter + (direction ? step : -step)) }}> Count</button>
      <button onClick={() => { setIsAuto(!isAuto) }}> {isAuto && 'stop '}auto click </button>

    </div>
  )
}
export default Counter;