import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { Task } from './components/Task';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Title />
      <Task todos={todos}/>
      <InputTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
