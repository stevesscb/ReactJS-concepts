import React, { useState, useEffect } from 'react';

import Card from '../../components/UI/Card';
import Button from '../../components/Buttons/Button';

const useReducerLoggedIn = (props) => {
  return (
    <Card>
      <h1>You are now logged in!</h1>
      <Button label='Logout' onClick={props.onClick} />
    </Card>
  );
};

export default useReducerLoggedIn;
