// src/App.jsx

import React, { useEffect, useContext } from 'react';
import { TodoProvider } from './context/TodoContext.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoFilter from './components/TodoFilter.jsx';
import TodoList from './components/TodoList.jsx';
import useLocalStorage from './hooks/UseLocalStorage.js';

const App = () => {
  return (
    <TodoProvider>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;