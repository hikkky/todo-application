import React from 'react'

export const Todo = ({ todo, setTodos }) => {

    const handleDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((item) =>
                item.id === todo.id ? { ...item, completed: !item.completed } : item
            )
        )
    }

    const handleClear = () => {
        setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    }

    return (
        <div>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.name}
        </span>
            <button onClick={handleDone}>完了</button>
            <button onClick={handleClear}>削除</button>
        </div>
    )
}