import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios";
import { TodoForm } from "./TodoForm";

export interface TodoDTO {
  text: string;
  complete: boolean;
  createdAt: number;
}

export const Todo = () => {
  const [todos, setTodos] = useState<TodoDTO[]>([]);

  // axiosInstance.get("/todos").then((res) => {
  //   setTodos(res.data);
  // });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axiosInstance.get("/todos");
    setTodos(res.data);
  };

  return (
    <div className="todo-container">
      <TodoForm todo={todos} setTodos={setTodos} />
    </div>
  );
};
