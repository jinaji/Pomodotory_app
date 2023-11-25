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

  // REST API 테스트
  useEffect(() => {
    const res = axiosInstance.post("/todos", todos).then((res) => {
      console.log(res);
    });
  }, [todos]);

  return (
    <div className="bg-green-100 w-[30%] mx-auto col-span-1">
      <TodoForm todo={todos} setTodos={setTodos} />
    </div>
  );
};
