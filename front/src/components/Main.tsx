import { useEffect, useState } from "react";
import { Pomodoro } from "./Pomodoro/Pomodoro";
import { Todo } from "./Todo/Todo";
import { axiosInstance } from "../axios";
import { TitleModal } from "./TitleModal";

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
        <TitleModal {...{ setUser, setIsModalOpen, input, setInput }} />
      )}
      <div className="grid-cols-2 gird-rows-1 flex">
        <Pomodoro input={input} cycle={cycle} />
        <Todo />
      </div>
    </div>
  );
};
