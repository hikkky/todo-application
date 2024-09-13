import React from 'react'

export const Task = ({ todos }) => {
  return (
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
)
}
