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

         let deleteTodo = (id) => {
          console.log("delete",id);
          let filteredTodo =allTodos.filter((ele) => {
            return ele.id !== id;
          });
          setAllTodos(filteredTodo);
         };

         let editTodo = (id) => {
          console.log("edit",id);
          let editTodo = allTodos.find((ele) => {
            return ele.id === id;
          });
          console.log(editTodo);

          let filteredTodo =allTodos.filter((ele) => {
            return ele.id !== id;
          });
          setAllTodos(filteredTodo);

          setTodo(editTodo.text);
         };


  return (
    <div>
        <CreateTodo todo={todo} handleTodo={handleTodo} createTodo={createTodo}/>
        <AllTodo AllTodos={allTodos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
};

export default TodoWrapper;