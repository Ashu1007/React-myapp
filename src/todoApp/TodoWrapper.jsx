import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import AllTodo from './AllTodo'

const TodoWrapper = () => {
    let[todo,setTodo]=useState("");

    let handleTodo = (e) => {
        setTodo(e.target.value);
    };

    let createTodo = (e) => {
        e.preventDefault();
        console.log(todo)
        if(todo.trim() !== ""){
           let newTodo ={
             text:todo,
             id:Date.now(),
           };
           console.log(newTodo);
          }else{
             alert("empty todo");
          };
         };

  return (
    <div>
        <CreateTodo todo={todo} handleTodo={handleTodo} createTodo={createTodo}/>
        <AllTodo/>
    </div>
  );
};

export default TodoWrapper;