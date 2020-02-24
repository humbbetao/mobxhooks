import React, { useState } from 'react';
import { useStore } from "../App";
import onEnterPress from "../helper/onEnterPress";

const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();
    console.log(todoList)
    
    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <div className="todo-new">
            <input type="text" value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
};

export default TodoNew