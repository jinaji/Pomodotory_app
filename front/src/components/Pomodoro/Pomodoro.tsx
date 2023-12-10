import { useEffect, useState } from "react";
import "../../styles/Pomodoro.css";
import { axiosInstance } from "../../axios";

interface input {
  input: string;
  cycle: number;
}

export const Pomodoro = (input: input) => {
  const [time, setTime] = useState(25 * 60);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [work, setWork] = useState(true);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setCycle(input.cycle);
  }, [input.cycle]);

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

  useEffect(() => {
    if (time <= 0 && timerId && work) {
      clearInterval(timerId);
      setWork(!work);
      setTime(25 * 60);
      setTimerId(null);

      axiosInstance.patch("pomodos/pomo", { name: input.input });
    } else if (time <= 0 && timerId && !work) {
      clearInterval(timerId);
      setWork(!work);
      setTime(5 * 60);
      alert("Time is up!");
      setTimerId(null);
      axiosInstance
        .patch("pomodos/short", { name: input.input })
        .then((res) => {
          if (res.data) {
            setCycle(res.data.short_break_num);
          }
        });
    }
  }, [time]);

  useEffect(() => {
    if (timerId !== null) return () => clearInterval(timerId);
  }, []);

  return (
    <div className="content-container">
      <div className="pomodoro-wrapper">
        <div>
          <h1 className="content-title">POMODOTORY</h1>
        </div>

        <div className="time-section">
          <div className="time-title-wrapper">
            <p className="time-title">{input.input}</p>
          </div>
          <p className="time-to">Time to {work ? "work" : "rest"} !!</p>
          <p className="timer">
            {Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time / 60)}{" "}
            : {time % 60 < 10 ? `0${time % 60}` : time % 60}
          </p>
        </div>

        <div className="button-section">
          <button
            className="pomodoro-button"
            onClick={() => handleButton("start")}
          >
            Start
          </button>
          <button
            className="pomodoro-button"
            onClick={() => handleButton("pause")}
          >
            Pause
          </button>
          <button
            className="pomodoro-button"
            onClick={() => handleButton("reset")}
          >
            Reset
          </button>
        </div>
        <p className="cycle"> Cycle: {cycle}</p>
      </div>
    </div>
  );
};
