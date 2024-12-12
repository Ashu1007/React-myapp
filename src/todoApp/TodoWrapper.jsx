import React, { useState } from 'react';
import CreateTodo from './CreateTodo.jsx';
import AllTodo from './AllTodo.jsx';

const TodoWrapper = () => {
    let[todo,setTodo]=useState("");
    let[allTodos,setAllTodos]= useState([{text: "hello world", id: 1}]);

    let handleTodo = (e) => {
        setTodo(e.target.value);
    };

    let createTodo = (e) => {
        e.preventDefault();
        // console.log(todo)
        if(todo.trim() !== ""){
           let newTodo ={
             text:todo,
             id:Date.now(),
           };
           console.log(newTodo);
           setAllTodos([...allTodos , newTodo]);
           setTodo("")
          }else{
            alert("empty todo");
          }
         };

         console.log(allTodos);

  return (
    <div>
        <CreateTodo todo={todo} handleTodo={handleTodo} createTodo={createTodo}/>
        <AllTodo allTodos={allTodos}/>
    </div>
  );
};

export default TodoWrapper;