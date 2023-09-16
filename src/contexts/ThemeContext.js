import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();
export const UpdateDarkTheme = createContext();

const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeStyle = {
    background: darkTheme ? '#FFF' : '#000',
    color: darkTheme ? '#000' : '#FFF',
    padding: '2rem',
    margin: '2rem',
  };

  const toggle = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpdateDarkTheme.Provider value={toggle}>
        <div style={themeStyle}>{props.children}</div>
      </UpdateDarkTheme.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
