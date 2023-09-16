import React, { useContext } from 'react';
import { UpdateDarkTheme } from './ThemeContext';

const Context = () => {
  const update = useContext(UpdateDarkTheme);

  return (
    <>
      <h1>Context</h1>
      <div>Change me</div>
      <button onClick={update}>Switch Theme</button>
    </>
  );
};

export default Context;
