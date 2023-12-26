import React from "react";

interface PomodoroButtonProps {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setTimerId: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>;
  timerId: NodeJS.Timeout | null;
}

export const PomodoroButton = ({
  setTime,
  setTimerId,
  timerId,
}: PomodoroButtonProps) => {
  const handleButton = (props: string) => {
    if (props === "start") {
      if (timerId) return;
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setTimerId(interval);
    } else if (props === "pause") {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
      return;
    } else if (props === "reset") {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
      setTime(25 * 60);
      return;
    }
  };

  return (
    <div className="button-section">
      <button className="pomodoro-button" onClick={() => handleButton("start")}>
        Start
      </button>
      <button className="pomodoro-button" onClick={() => handleButton("pause")}>
        Pause
      </button>
      <button className="pomodoro-button" onClick={() => handleButton("reset")}>
        Reset
      </button>
    </div>
  );
};
