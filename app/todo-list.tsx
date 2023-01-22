import React from "react";
import Todo from "./todo";
const todo = async () => {
  //learnt that use this way to fetch data , not to return data.json simply as it is a promise so it will return
  //undefined
  let data = await fetch("http://localhost:3001/api/todo/list");
  const newd = await data.json();

  return newd;
};
export default async function TodoList() {
  const tododata = await todo();
  //   console.log(tododata);
  return (
    <div>
      <ul>
        {tododata.todos.map((el: any) => {
          return ( <Todo el={el} />);
        })}
      </ul>
    </div>
  );
}
