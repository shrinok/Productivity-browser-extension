import React, { useState, useEffect } from "react";

const FocusTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      setTime(1500); // reset timer
      chrome.alarms.create("pomodoroEnd", { when: Date.now() });
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div className="focus-timer">
      <h2>Focus Timer</h2>
      <div className="timer-display">
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default FocusTimer;
