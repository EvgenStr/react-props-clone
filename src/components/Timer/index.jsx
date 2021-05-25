import React, { useState, useEffect } from "react";
import Button from "../Button";
import Controls from "./Controls";
import TimerDisplay from "./TimerDisplay";
import style from './Timer.module.css';


function Timer(props) {
  const { name = "Timer" } = props;
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [diff, setDiff] = useState(null);
  const [currentTime, setCurrentTime] = useState("00:00:00.000");

  const msToTime = (duration = 0) => {
    const getCorrectTimeString = (v) => (v < 10 ? `0${v}` : v);
    const seconds = getCorrectTimeString(((duration / 1000) % 60).toFixed(3));
    const minutes = getCorrectTimeString(
      Math.trunc((duration / (1000 * 60)) % 60)
    );
    const hours = getCorrectTimeString(Math.trunc(duration / (1000 * 60 * 60)));
    return `${hours}:${minutes}:${seconds}`;
  }
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      console.log("diff", diff)
      interval = setInterval(tick, 10);
    } else if (!isRunning && !startTime) {
      setCurrentTime(msToTime(0));
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime, currentTime, diff]);
  
  const tick = () => {
    setCurrentTime(msToTime(Date.now() - startTime));
  };

  const start = () => {
    if (isRunning || startTime) return;
    setIsRunning(true);
    setStartTime(Date.now());
    setStartButton({
      caption: "Reset",
      isHidden: false,
      handler: reset,
    });
    setPauseButton({
      caption: "Pause",
      isHidden: false,
      handler: pause,
    })
    setTimeout(tick, 10);
  };

  const pause = () => {
    console.log("pause1", diff)
    setIsRunning(false);
    setDiff(Date.now() - startTime);
    setPauseButton({
      caption: "Resume",
      isHidden: false,
      handler: resume,
    });
    console.log("pause2", diff)
  };

  const resume = () => {
    setIsRunning(true);
    setStartTime(Date.now() - diff);
    console.log("resume", diff)
    setPauseButton({
      caption: "Pause",
      isHidden: false,
      handler: pause,
    });
    setTimeout(tick, 10);
  };

  const reset = () => {
    setIsRunning(false);
    setCurrentTime(msToTime(0));
    setStartTime(null);
    setDiff(null);
    setStartButton({
      caption: "Start",
      isHidden: false,
      handler: start,
    });
    setPauseButton({
      caption: "Pause",
      isHidden: true,
      handler: pause,
    });
  };

  const [startButton, setStartButton] = useState({
    caption: "Start",
    isHidden: false,
    handler: start,
  });
  const [pauseButton, setPauseButton] = useState({
    caption: "Pause",
    isHidden: true,
    handler: pause,
  });
  return (
    <article className={style.container}>
      <h2>{name}</h2>
      <TimerDisplay currentTime={currentTime} />
      <Controls>
        <Button handler={startButton.handler} caption={startButton.caption} />
        {!pauseButton.isHidden && (
          <Button
            handler={pauseButton.handler}
            caption={pauseButton.caption}
          />
        )}
      </Controls>
    </article>
  );

}

export default Timer;
