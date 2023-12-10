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
    <div className="todo-wrapper">
      <h1 className="content-title">TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="todo-input-button">
          <p className="todo-input-text">+</p>
        </button>
      </form>
      <div className="todo-list-container">
        {props.todo.map((todo: any, index: number) => (
          <div
            key={index}
            className={`todo-list-wrapper ${
              todo.complete
                ? "bg-highlight/30 text-[#977054]"
                : "bg-dotory/30 text-[#754827]"
            }`}
          >
            <button
              onClick={() => handleCheck(todo.createdAt)}
              className={"todo-check-button"}
            ></button>
            {!todo.complete ? (
              <p className="">{todo.text}</p>
            ) : (
              <p className="text-dotory">{todo.text}</p>
            )}
            <button
              onClick={() => handleDelete(todo.createdAt)}
              className="todo-delete-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
