import { useState, useEffect } from 'react';

const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [diff, setDiff] = useState(null);
  const [currentTime, setCurrentTime] = useState("00:00:00.000");
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(tick, 10);
    } else if (!isRunning && !startTime) {
      setCurrentTime(msToTime(0));
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime, currentTime]);
  useEffect(() => {
    if (startTime) {
      if (!isRunning && diff) {
        setPauseButton({
          caption: "Resume",
          isHidden: false,
          handler: resume,
        });
      } else {
        setPauseButton({
          ...pauseButton,
          caption: "Pause",
          handler: pause,
        });
      }
    }
  }, [isRunning, startTime, diff]);

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

  const resume = () => {
    setIsRunning(true);
    setStartTime(Date.now() - diff);
    console.log("resume", diff)
    setPauseButton({
      caption: "Pause",
      isHidden: false,
      handler: pause,
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

  return {
    isRunning, currentTime, startButton, pauseButton,
    tick: () => tick(),
    start: () => start(),
    pause: () => pause(),
    reset: () => reset(),
    resume: () => resume(),
  }
}
export default useTimer;