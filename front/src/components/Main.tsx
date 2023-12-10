import { useEffect, useState } from "react";
import { Pomodoro } from "./Pomodoro/Pomodoro";
import { Todo } from "./Todo/Todo";
import { axiosInstance } from "../axios";

interface userDTO {
  cycle_num: number;
  id: number;
  long_break_num: number;
  name: string;
  pomodoro_num: number;
  short_break_num: number;
}

export const Main = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<userDTO>();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    console.log(user);
    if (user) setCycle(user.short_break_num);
  }, [user]);

  return (
    <div className="h-full w-full pt-[10vh] px-[10vw]">
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
                onClick={async () => {
                  if (input === "") return;
                  await axiosInstance.post(`pomodos/${input}`);
                  await axiosInstance.get(`pomodos/${input}`).then((res) => {
                    setUser(res.data);
                  });
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
        <Pomodoro input={input} cycle={cycle} />
        <Todo />
      </div>
    </div>
  );
};
