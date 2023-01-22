"use client";
import React from "react";
import { useRouter } from "next/navigation";
async function update(id:any, isDone:any,refresh:any) {
  await fetch("/api/todo/update", {
    method: "POST",

    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}


//funciton for delete
async function del(id:any,refresh:any){
  await fetch(`/api/todo/delete?id=${id}`,{
    method:'DELETE',
   

  });
  refresh()
}

export default function Todo({ el }:any) {
  const router = useRouter();
  return (
    <div>
      <li key={el.id}>
        <input type="checkbox" onChange={(e) => {update(el.id,e.target.checked,router.refresh)}} checked={el.isDone}/>
        {el.name}
        <button onClick={()=>(del(el.id,router.refresh))}>delete</button>
      </li>
    </div>
  );
}
