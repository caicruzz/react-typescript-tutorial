import React from "react";
import {Todo} from "../todo";
import {SingleTodo} from "./SingleTodo";

type TodoListProps = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<TodoListProps> = ({todos, setTodos}) => {
    function handleDelete(id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return <span className="todos">
        {todos.map(todo => (
            <SingleTodo todo={todo} handleDelete={handleDelete}></SingleTodo>
        ))}
    </span>
}