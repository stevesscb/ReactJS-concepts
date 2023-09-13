import React, { useState, useReducer } from 'react';

import Card from '../../components/UI/Card';
import UserInput from '../../components/User/UserInput';
import Button from '../../components/Buttons/Button';

import classes from './useReducer.module.css';
import Todo from './Todo';

const reducer = (todos, action) => {
  switch (action.type) {
    case 'add':
      return [...todos, newTodo(action.payload.name)];
    case 'toggle':
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
};

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const inputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'add', payload: { name: name } });
    setName('');
  };

  return (
    <Card>
      <h1>useReducer hook</h1>
      <form onSubmit={submitHandler}>
        <UserInput
          label='Enter todo'
          type='text'
          id='todo'
          name='todo'
          value={name}
          onChange={inputChangeHandler}
        />
        <Button label='submit' onClick={submitHandler} />
      </form>
      <ul className={classes.todos}>
        <h4>list of todos</h4>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </Card>
  );
};

export default UseReducer;
