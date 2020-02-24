import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStore } from '../App'
import TodoItem from './TodoItem'
import TodoItemStore from '../store/TodoItem'

const TodoList = () => {
    const todoList = useStore();
    return useObserver(() => (
        <div className="todo-list">
            <div className="open-todos">
                <span>Open Todos</span>
                {todoList.openTodos.map((todo: TodoItemStore) => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />)}
            </div>
            <div className="finished-todos">
                <span>Finished Todos</span>
                {todoList.finishedTodos.map((todo: TodoItemStore) => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />)}
            </div>
        </div>
    ));
};

export default TodoList