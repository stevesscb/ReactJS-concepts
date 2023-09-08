import React, { useState } from 'react';

import Card from '../../components/UI/Card';
import Button from '../../components/Buttons/Button';

// Error message
const error = {
  color: 'red',
  fontStyle: 'italic',
};

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const increaseBtnHandler = () => {
    if (counter > 9) {
      setErrorMessage(<span style={error}>Counter cannot go above 10</span>);
      return;
    }

    setCounter((counter) => counter + 1);
    setErrorMessage('');
  };

  const decreaseBtnHandler = () => {
    if (counter < 1) {
      setErrorMessage(<span style={error}>Counter cannot go below 0</span>);
      return;
    }

    setCounter((counter) => counter - 1);
    setErrorMessage('');
  };

  return (
    <Card>
      <h1>useState hook</h1>
      <Button onClick={increaseBtnHandler} label='+' />
      <span>{counter}</span>
      <Button onClick={decreaseBtnHandler} label='-' />
      <div>{errorMessage}</div>
    </Card>
  );
};

export default UseState;
