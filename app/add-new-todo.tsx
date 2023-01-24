"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import React from "react";

async function add(name:any, refresh:any) {
  await fetch("https://api-for-assignment-todo-app.vercel.app//api/todo/add", {
    method: "POST",
mode:'no-cors',
    body: JSON.stringify({ name }),
  });
  refresh();
}
function AddnewTodo() {
  const router = useRouter();
  const [todoData, setTodoData] = useState("");
  return (
    <div className="AddnewTodoMain">
      <input
        type="text"
        placeholder="add new todo item..."
        className="input"
        onChange={(e) => setTodoData(e.target.value)}
      />
      <button onClick={() => add(todoData, router.refresh)}>ADD</button>
    </div>
  );
}

export default AddnewTodo;
