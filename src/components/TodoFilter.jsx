// src/TodoFilter.js

import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoFilter = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleFilterChange = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, [dispatch]);

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg">
      <button 
        onClick={() => handleFilterChange('All')} 
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150  ${true ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
      }`}
    >
      
        All
      </button>
      <button 
        onClick={() => handleFilterChange('Active')} 
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150  ${ false ? 'line-height' : 'bg-white text-blue-500 hover:bg-blue-100'
      }`}
      >
        Active
      </button>
      <button 
        onClick={() => handleFilterChange('Completed')} 
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${ false ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
      }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;