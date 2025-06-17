import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');  // Shared global value

  const toggleTheme = () => {
    setTheme((previous) => (previous === "light" ? "dark" : "light"));
    console.log("you clicked me")
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
