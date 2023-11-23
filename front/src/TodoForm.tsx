import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import React, { Dispatch } from "react";

interface TodoFormProps {
  todo: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoForm = (props: TodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = { text, complete: false, id: Date.now() };
    if (text === "") return;
    props.setTodos((prevTodos: any) => [...prevTodos, newTodo]);
    setText("");
  };

  const handleCheck = (id: number) => {
    props.setTodos((prevTodos: any) =>
      prevTodos.map((todo: any, i: number) =>
        id === todo.id ? { ...todo, complete: !todo.complete } : todo
      )
    );
    console.log(props.todo, id);
  };

  const handleDelete = (id: number) => {
    props.setTodos((prevTodos: any) =>
      prevTodos.filter((todo: any) => id !== todo.id)
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className=""
      />
      <button type="submit" className="mt-2">
        Add Todo
      </button>
      {props.todo.map((todo: any, index: number) => (
        <div key={index} className="flex flex-row">
          <button
            onClick={() => handleCheck(todo.id)}
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
            onClick={() => handleDelete(todo.id)}
            className="mb-2 ml-auto mr-3"
          >
            X
          </button>
        </div>
      ))}
    </form>
  );
};
