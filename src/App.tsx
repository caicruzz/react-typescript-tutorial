import React, {useState} from 'react';
import './App.css';
import {InputField} from './components/InputField';
import {Todo} from "./todo";
import {TodoList} from "./components/TodoList";

export const App: React.FC = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
            setTodo("");
        }
    }

    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}
