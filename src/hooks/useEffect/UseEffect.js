import React, { useState, useEffect } from 'react';

import Card from '../../components/UI/Card';
import UserInput from '../../components/User/UserInput';
import Button from '../../components/Buttons/Button';

import classes from './useEffect.module.css';

const UseEffect = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onLogin('effect');
  };

  return (
    <Card>
      <h1>useEffect hook</h1>
      <form onSubmit={onSubmitHandler}>
        <UserInput
          className={emailIsValid === false ? `${classes.invalid}` : ''}
          id='email'
          label='Email'
          type='email'
          value={enteredEmail}
          onBlur={validateEmailHandler}
          onChange={emailChangeHandler}
        />
        <UserInput
          className={passwordIsValid === false ? `${classes.invalid}` : ''}
          id='password'
          label='password'
          type='password'
          value={enteredPassword}
          onBlur={validatePasswordHandler}
          onChange={passwordChangeHandler}
        />
        <Button
          label='login'
          onClick={onSubmitHandler}
          disabled={!formIsValid}
        />
      </form>
    </Card>
  );
};

export default UseEffect;
