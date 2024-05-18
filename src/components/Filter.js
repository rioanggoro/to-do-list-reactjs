import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-around mb-4">
      <button
        className={`p-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`p-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`p-2 rounded ${filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        onClick={() => setFilter('incomplete')}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
