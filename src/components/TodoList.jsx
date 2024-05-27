// src/TodoList.js

import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'Active':
        return state.todos.filter(todo => !todo.completed);
      case 'Completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <ul className="list-none p-0 bg-white shadow-lg rounded-lg">
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;