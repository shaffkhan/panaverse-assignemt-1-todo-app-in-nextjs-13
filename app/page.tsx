import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import AddnewTodo from "./add-new-todo";
import TodoList from "./todo-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <AddnewTodo />
         {/* @ts-expect-error Server Component */}
        <TodoList  />
      </div>
    </>
  );
}
