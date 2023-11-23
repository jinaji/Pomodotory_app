import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { axiosInstance } from "./axios";

export interface Todo {
  text: string;
  complete: boolean;
  id: number;
}

export const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // REST API 테스트
  useEffect(() => {
    const res = axiosInstance.post("/todos", todos);
  }, [todos]);

  console.log(todos);
  return (
    <div className="bg-green-100 w-[30%] mx-auto col-span-1">
      <TodoForm todo={todos} setTodos={setTodos} />
    </div>
  );
};
