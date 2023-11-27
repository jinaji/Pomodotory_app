import { useEffect, useState } from "react";
import "../../styles/Pomodoro.css";

export const Pomodoro = () => {
  const [time, setTime] = useState(5);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [work, setWork] = useState(true);
  const [rest, setRest] = useState(false);
  const [cycle, setCycle] = useState<string[]>([]);

  const handleButton = (props: string) => {
    if (props === "start") {
      if (timerId) return;
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setTimerId(interval);
    } else if (props === "pause") {
      if (timerId) clearInterval(timerId);
      return;
    } else if (props === "reset") {
      if (timerId) clearInterval(timerId);
      setTime(25 * 60);
      return;
    }
  };

  useEffect(() => {
    if (time <= 0 && timerId && work) {
      clearInterval(timerId);
      setWork(!work);
      setRest(!rest);
      setTime(3);
      alert("Time is up!");
      setTimerId(null);
    } else if (time <= 0 && timerId && rest) {
      clearInterval(timerId);
      setWork(!work);
      setRest(!rest);
      setTime(5);
      setCycle([...cycle, "cycle"]);
      alert("Time is up!");
      setTimerId(null);
    }
  }, [time]);

  useEffect(() => {
    if (timerId !== null) return () => clearInterval(timerId);
  }, []);

  const doneCycle = () => {
    return cycle.map((item, key) => {
      return (
        <div className="bg-blue-100" key={key}>
          참잘했어요
        </div>
      );
    });
  };
  console.log(time);

  return (
    <div className="content-container">
      <div className=" flex flex-col block">
        <div>
          <h1 className="content-title">POMODOTORY</h1>
        </div>

        <div className="time-section mx-auto">
          <p className="time-to">Time to {work ? "work" : "rest"}</p>

          <p className="timer text-center">
            {Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time / 60)}{" "}
            : {time % 60 < 10 ? `0${time % 60}` : time % 60}
          </p>
        </div>

        {doneCycle()}

        <div className="button-section justify-items-stretch space-x-5 mx-auto">
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
      </div>
    </div>
  );
};
