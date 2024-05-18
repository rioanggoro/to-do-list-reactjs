import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo({ text: todo, dueDate, priority });
      setTodo('');
      setDueDate('');
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full rounded mb-2"
        placeholder="Add a new task"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 w-full rounded mb-2"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <select
        className="border p-2 w-full rounded mb-2"
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
