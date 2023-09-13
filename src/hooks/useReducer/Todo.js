import React from 'react';

const Todo = ({ todo, dispatch }) => {
  return (
    <li style={{ color: todo.complete ? 'red' : '#000' }}>
      {todo.name}
      <button
        onClick={() => dispatch({ type: 'toggle', payload: { id: todo.id } })}
      >
        toggle
      </button>
      <button
        onClick={() => dispatch({ type: 'delete', payload: { id: todo.id } })}
      >
        delete
      </button>
    </li>
  );
};

export default Todo;
