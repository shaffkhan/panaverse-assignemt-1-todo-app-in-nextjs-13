"use client";
import { useRouter } from "next/navigation";
import  { React,useState } from "react";




async function add(name, refresh) {
  await fetch("/api/todo/add", {
    method: "POST",

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
