import React, { useState } from "react";
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
  const tick = () => {
    console.log("tick", isRunning)
    if (!isRunning) return;
    setTimeout(tick, 10);
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
    console.log("start", isRunning);
    setTimeout(tick, 5000);
  };

  const pause = () => {
    setIsRunning(false);
    setDiff(Date.now() - startTime);
    setPauseButton({
      caption: "Resume",
      isHidden: false,
      handler: resume,
    });
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

  const resume = () => {
    setIsRunning(true);
    setStartTime(Date.now() - diff);
    setPauseButton({
      caption: "Pause",
      isHidden: false,
      handler: pause,
    });
    setTimeout(tick, 10);
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
