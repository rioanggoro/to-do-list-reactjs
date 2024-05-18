import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = ({ text, dueDate, priority }) => {
    const newTodo = {
      id: Date.now(),
      text,
      dueDate,
      priority,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-fuchsia-400 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Filter filter={filter} setFilter={setFilter} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} filter={filter} />
      </div>
    </div>
  );
}

export default App;
