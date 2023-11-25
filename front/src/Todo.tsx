import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { axiosInstance } from "./axios";

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

  // useEffect(() => {
  //   axiosInstance.get("/todos").then((res) => {
  //     setTodos(res.data);
  //   });
  // }, []);

  return (
    <div className="bg-green-100 w-[30%] mx-auto col-span-1">
      <TodoForm todo={todos} setTodos={setTodos} />
    </div>
  );
};
