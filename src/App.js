import React, { useState, useEffect } from 'react';

import Wrapper from './components/Layout/Wrapper';
import UseState from './hooks/useState/UseState';
import UseRef from './hooks/useRef/UseRef';
import UseEffect from './hooks/useEffect/UseEffect';
import UseEffectLoggedIn from './hooks/useEffect/UseEffectLoggedIn';
import UseReducer from './hooks/useReducer/UseReducer';

import ThemeContextProvider from './contexts/ThemeContext';
import Context from './contexts/Context';
import Card from './components/UI/Card';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInUserInformation = localStorage.getItem('isLoggedIn');

    if (storedLoggedInUserInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Wrapper>
      <UseState />
      <UseRef />
      {isLoggedIn ? (
        <UseEffectLoggedIn onClick={logoutHandler} />
      ) : (
        <UseEffect onLogin={loginHandler} />
      )}
      <UseReducer />
      <ThemeContextProvider>
        <Context />
      </ThemeContextProvider>
    </Wrapper>
  );
}

export default App;
