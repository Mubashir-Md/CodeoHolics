import React, { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {

        setIsDarkMode(!isDarkMode);
    };
  return (
    <div>
      <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}} >{props.children}</ThemeContext.Provider>
    </div>
  );
}

export { ThemeContextProvider, ThemeContext };
