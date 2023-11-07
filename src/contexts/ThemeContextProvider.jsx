import React, { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localData = localStorage.getItem("isDarkMode");
    return localData ? JSON.parse(localData) : false;
  });
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContextProvider, ThemeContext };
