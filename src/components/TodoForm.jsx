// src/TodoForm.js

import React, { useContext, useRef } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: text });
      inputRef.current.value = '';
    }
  };

  return (
    <div className="mb-6 flex items-center bg-white shadow-md rounded-lg p-4">
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Add a new todo"
        className="border rounded-lg p-2 flex-grow outline-none focus:border-blue-500"
      />
      <button 
        onClick={handleAddTodo} 
        className="bg-blue-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-600 transition duration-150"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;