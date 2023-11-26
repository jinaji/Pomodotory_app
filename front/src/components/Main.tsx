import { useEffect, useState } from "react";
import { Pomodoro } from "./Pomodoro/Pomodoro";
import { Todo } from "./Todo/Todo";

export const Main = () => {
  const [user, setUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    } else setIsModalOpen(true);
  }, []);

  return (
    <div className="Main mx-auto">
      <div className="grid-cols-2 gird-rows-2 gap-4 flex bg-[#B5815B]">
        {isModalOpen && (
          <div className="absloute w-[420px] h-[240px] bg-blue-500 z-10 ">
            <input
              value={user}
              onSubmit={() => {
                setUser(user);
                window.localStorage.setItem(user, user);
              }}
            ></input>{" "}
          </div>
        )}
        <Pomodoro />
        <Todo />
      </div>
    </div>
  );
};
