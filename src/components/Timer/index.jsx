import React from "react";
import Button from "../Button";
import Controls from "./Controls";
import TimerDisplay from "./TimerDisplay";
import useTimer from "./customHooks"
import style from './Timer.module.css';


function Timer(props) {
  const { name = "Timer" } = props;
  const { currentTime, startButton, pauseButton } = useTimer();
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
