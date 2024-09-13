import { useRef } from 'react';
import React from 'react'
import { v4 as uuidv4 } from "uuid";

export const InputTodo= ({todos, setTodos}) => {

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = null;
  }

  return (
    <div>
        <form>
            <input type="text" ref={todoNameRef}/>
            <button type="button" onClick={handleAddTodo}>タスクを追加</button>
        </form>
    </div>
  )
}
