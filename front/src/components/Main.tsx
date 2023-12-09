import { useEffect, useState } from "react";
import { Pomodoro } from "./Pomodoro/Pomodoro";
import { Todo } from "./Todo/Todo";
import { axiosInstance } from "../axios";

export const Main = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="Main mx-auto my-auto">
      {isModalOpen && (
        <div className="flex bg-[rgba(0,0,0,0.1)] items-center justify-center z-30 fixed top-0 left-0 w-full h-full">
          <div className="relative flex flex-col w-[30rem] h-[20rem] z-30 bg-subColor rounded-3xl shadow-lg items-center justify-center ">
            <div>
              <p className="text-center mb-10 text-dotory font-bold text-2xl ">
                제목을 입력하세요!
              </p>
              <input
                className="todo-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button
                className="todo-input-button"
                onClick={() => {
                  console.log(input);
                  axiosInstance.post(`pomodos/${input}`);
                  setUser(input);
                  setIsModalOpen(false);
                }}
              >
                sunbmit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid-cols-2 gird-rows-1 flex">
        <Pomodoro />
        <Todo />
      </div>
    </div>
  );
};
