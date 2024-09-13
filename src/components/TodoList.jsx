import React from 'react'
import { Todo } from "./Todo"

export const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} setTodos={setTodos}/>)
}
