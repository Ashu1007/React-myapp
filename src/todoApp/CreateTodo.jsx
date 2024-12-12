import React from 'react'
import style from "./createTodo.module.css";
//import style from "./alltodos.module.css";

const CreateTodo = (prop) => {

    let {todo,handleTodo ,createTodo}= prop;

  return (
    <div id={style.createTodo}>
        <form onSubmit={createTodo}>
            <h2>Create Todo</h2>
            <input type="text" placeholder="todo......"  value={todo} onChange={handleTodo}/>
            <br/>
            <button>create</button>
        </form>
    </div>
  )
}

export default CreateTodo;