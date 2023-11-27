import { useEffect, useState } from "react";
import { Pomodoro } from "./Pomodoro/Pomodoro";
import { Todo } from "./Todo/Todo";

export const Main = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    } else setIsModalOpen(true);
  }, []);

  return (
    <div className="Main mx-auto my-auto">
      <div className="grid-cols-2 gird-rows-1 flex">
        {isModalOpen && (
          <div className="absloute w-[420px] h-[240px] bg-blue-500 z-10 ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
              onClick={() => {
                localStorage.setItem("user", input);
                setUser(input);
                setIsModalOpen(false);
              }}
            >
              Button
            </button>
          </div>
        )}
        <Pomodoro />
        <Todo />
      </div>
    </div>
  );
};
