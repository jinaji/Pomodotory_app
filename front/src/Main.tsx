import { Pomodoro } from "./Pomodoro";
import { Todo } from "./Todo";

export const Main = () => {
  return (
    <div className="Main w-[80%] mx-auto">
      <div className="grid-cols-2 gird-rows-2 gap-4 flex bg-pink-100">
        {/* <img src={require("./public/logo192.png")} alt="Pomodoro" /> */}
        <Pomodoro />
        <Todo />
      </div>
    </div>
  );
};
