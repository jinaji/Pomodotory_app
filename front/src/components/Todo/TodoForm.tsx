import { useState } from "react";
import { TodoDTO } from "./Todo";
import React, { Dispatch } from "react";
import { axiosInstance } from "../../axios";

interface TodoFormProps {
  todo: TodoDTO[];
  setTodos: Dispatch<React.SetStateAction<TodoDTO[]>>;
}

export const TodoForm = (props: TodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = { text, complete: false, createdAt: Date.now() / 1000 };
    if (text === "") return;
    props.setTodos((prevTodos: any) => [...prevTodos, newTodo]);
    axiosInstance.post("/todos", newTodo);
    // axiosInstance.get("/todos").then((res) => {
    //   props.setTodos(res.data);
    // });
    setText("");
  };

  const handleCheck = (createdAt: number) => {
    props.setTodos((prevTodos: any) =>
      prevTodos.map((todo: any, i: number) =>
        createdAt === todo.createdAt
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    );
    axiosInstance.patch(`/todos/${createdAt}`);
  };

  const handleDelete = (createdAt: number) => {
    props.setTodos((prevTodos: any) =>
      prevTodos.filter((todo: any) => createdAt !== todo.createdAt)
    );
    axiosInstance.delete(`/todos/${createdAt}`);
  };

  return (
    <div className="grid justify-items-center grid-rows-6 h-full">
      <h1 className="content-title">TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="todo-input-button">
          <p className="text-white font-bold text-[46px] leading-[0px] mb-2">
            +
          </p>
        </button>
      </form>
      <div className="todo-list-container">
        {props.todo.map((todo: any, index: number) => (
          <div key={index} className="flex flex-row todo-list-wrapper">
            <button
              onClick={() => handleCheck(todo.createdAt)}
              className={`h-6 w-6 rounded-full shadow-xl ${
                todo.complete ? "bg-green-200" : "bg-white"
              } border-2 border-green-300 mb-2 ml-1 mr-2`}
            ></button>
            {!todo.complete ? (
              <p className="">{todo.text}</p>
            ) : (
              <p className="text-gray-400">{todo.text}</p>
            )}
            <button
              onClick={() => handleDelete(todo.createdAt)}
              className="mb-2 ml-auto mr-3"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
