import React from 'react';
import Style from "./alltodos.module.css";
const AllTodo = (prop) => {
  console.log(prop); //{allTodos:[{},{},{}]
  let{ AllTodos , deleteTodo, editTodo} = prop;

  return (
    <div id={Style.todosWrapper}>
      {AllTodos.map((ele) => {
        console.log(ele);
        let { text, id } =ele;
        return(
          <section key ={id}>
            <h1>{text}</h1>
            <button onClick={()=>editTodo(id)}>edit</button>
            <button onClick={()=>deleteTodo(id)}>delete</button>
          </section>

        )
      })}  
    </div>
  )
}

export default AllTodo;