import React, { useState, useRef } from 'react';

import Card from '../../components/UI/Card';
import UserInput from '../../components/User/UserInput';
import Button from '../../components/Buttons/Button';

const UseRef = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // Validation
    // Check both fields aren't empty
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setIsValid(false);
      setErrorMessage('Input fields must not be empty!');
      return;

      // Check is User's age is below 1 years old.
    } else if (enteredUserAge < 1) {
      setIsValid(false);
      setErrorMessage('Age must be at least 1 years old');
      return;
    }

    console.log(enteredUsername, enteredUserAge);
    // Reset input fields
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    // Reset error message
    setIsValid(true);
  };

  return (
    <Card>
      <h1>useRef hook</h1>
      <div>
        <form onSubmit={onSubmitHandler}>
          <UserInput
            ref={nameInputRef}
            id='username'
            name='username'
            label='Username'
            type='text'
          />
          <UserInput
            ref={ageInputRef}
            id='age'
            name='age'
            label='Age (Years old)'
            type='number'
          />
          <div>
            {!isValid && (
              <span style={{ color: 'red', fontStyle: 'italic' }}>
                {errorMessage}
              </span>
            )}
          </div>
          <Button label='submit' />
        </form>
      </div>
    </Card>
  );
};

export default UseRef;
