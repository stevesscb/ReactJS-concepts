import React, { useState, useEffect } from 'react';

import Wrapper from './components/Layout/Wrapper';
import UseState from './hooks/useState/UseState';
import UseRef from './hooks/useRef/UseRef';
import UseEffect from './hooks/useEffect/UseEffect';
import UseEffectLoggedIn from './hooks/useEffect/UseEffectLoggedIn';
import UseReducer from './hooks/useReducer/UseReducer';

import ThemeContextProvider from './contexts/ThemeContext';
import Context from './contexts/Context';
import ModalWindow from './components/UI/modal/ModalCard';
import ModalIndex from './components/UI/modal/Index';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, showModal] = useState(false);

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
      {modal && (
        <ModalWindow
          closeModal={() => {
            showModal(false);
          }}
        />
      )}
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
      <ModalIndex
        showModal={() => {
          showModal(true);
        }}
      />
    </Wrapper>
  );
}

export default App;
