import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const priorityColors = {
    high: 'bg-red-200',
    medium: 'bg-yellow-200',
    low: 'bg-green-200',
  };

  return (
    <div className={`flex items-center justify-between p-4 mb-2 rounded ${priorityColors[todo.priority]}`}>
      <div>
        <div className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</div>
        <div className="text-sm text-gray-600">Due: {todo.dueDate}</div>
      </div>
      <div>
        <button
          onClick={() => toggleComplete(todo.id)}
          className="bg-green-500 text-white p-2 rounded mr-2"
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
