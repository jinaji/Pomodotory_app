import { useState } from "react";
import { axiosInstance } from "../axios";
import { usePomodosMutation } from "./Hooks/usePomodosMutation";
import { usePomodosQuery } from "./Hooks/usePomodosQuery";
import { Mutation } from "react-query";

interface setterData {
  setUser: any;
  setIsModalOpen: any;
  input: string;
  setInput: any;
}

export const TitleModal = ({
  setUser,
  setIsModalOpen,
  input,
  setInput,
}: setterData) => {
  const pomodosMutation = usePomodosMutation();

  const handleClickButton = async () => {
    async () => {
      if (input === "") return;
      (await pomodosMutation).mutate(input);
      setIsModalOpen(false);
    };
  };

  return (
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
          <button className="todo-input-button" onClick={handleClickButton}>
            sunbmit
          </button>
        </div>
      </div>
    </div>
  );
};
