import React from 'react';
import "./alltodos.module.css";

const AllTodo = (prop) => {
  console.log(prop); //{allTodos:[{},{},{}]
  let{ allTodos} = prop;

  return (
    <div>
      {allTodos.map((ele) => {
        console.log(ele);
        let { text, id } =ele;
        return(
          <section key ={id}>
            <h1>{text}</h1>
            <button>edit</button><br></br>
            <button>delete</button>
          </section>

        )
      })}  
    </div>
  )
}

export default AllTodo;