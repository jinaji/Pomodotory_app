import { useEffect, useState } from "react";
import "../../styles/Pomodoro.css";
import { axiosInstance } from "../../axios";

interface input {
  input: string;
}

export const Pomodoro = (input: input) => {
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
      // alert("Time is up!");
      setTimerId(null);
      console.log(input.input);
      axiosInstance.patch("pomodos/pomo", { name: input.input });
    } else if (time <= 0 && timerId && rest) {
      clearInterval(timerId);
      setWork(!work);
      setRest(!rest);
      setTime(5);
      setCycle([...cycle, "cycle"]);
      alert("Time is up!");
      setTimerId(null);
      axiosInstance.patch("pomodos/short", input.input);
    }
  }, [time]);

  useEffect(() => {
    if (timerId !== null) return () => clearInterval(timerId);
    // const newPomo = {
    //   pomodoro_num: 0,
    //   short_break_num: 0,
    //   long_break_num: 0,
    //   cycle_num: 0,
    //   // id: 1,
    // };
    // axiosInstance.post("pomodos", newPomo);
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
      <div className="grid justify-items-center grid-rows-5 h-full">
        <div>
          <h1 className="content-title">POMODOTORY</h1>
        </div>

        <div className="time-section mx-auto row-span-2">
          <p className="time-to text-center">
            Time to {work ? "work" : "rest"} !!
          </p>
          <p className="timer text-center pt-10">
            {Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time / 60)}{" "}
            : {time % 60 < 10 ? `0${time % 60}` : time % 60}
          </p>
        </div>

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
        {doneCycle()}
      </div>
    </div>
  );
};
