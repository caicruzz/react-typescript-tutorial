import React, {useState} from "react";

import {AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md";
import {Todo} from "../todo";

type TodoProps = {
    todo: Todo;
    handleDelete: (id: number) => void
}

export const SingleTodo: React.FC<TodoProps> = ({todo, handleDelete}) => {
    const [isDone, setIsDone] = useState(false);
    let titleClass: string;

    if (isDone) {
        titleClass = "done_todo"
    } else {
        titleClass = "todos__single--text"
    }

  return <div className="todos__single">
      <span className={titleClass}>{todo.todo}</span>
      <span className="icon" onClick={() => setIsDone(!isDone)}><MdDone/></span>
      <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
  </div>
}