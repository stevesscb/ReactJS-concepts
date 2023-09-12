import React, { useState, useEffect } from 'react';

import Card from '../../components/UI/Card';
import Button from '../../components/Buttons/Button';

import classes from './UseEffectLoggedIn.module.css';

const useEffectLoggedIn = (props) => {
  const [recourseType, setRecourseType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // API request
    fetch(`https://jsonplaceholder.typicode.com/${recourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log('clean up');
    };
  }, [recourseType]);

  return (
    <Card>
      <h1>You are now logged in!</h1>
      <button onClick={() => setRecourseType('posts')}>posts</button>
      <button onClick={() => setRecourseType('comments')}>comments</button>
      <button onClick={() => setRecourseType('users')}>users</button>
      <h2 style={{ textTransform: 'uppercase' }}>{recourseType}</h2>
      <ul className={classes.resources}>
        {items.map((item) => (
          <li key={item.id}>
            {recourseType === 'posts'
              ? JSON.stringify(item.title)
              : JSON.stringify(item.name)}
          </li>
        ))}
      </ul>
      <Button label='Logout' onClick={props.onClick} />
    </Card>
  );
};

export default useEffectLoggedIn;
