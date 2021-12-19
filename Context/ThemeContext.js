import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeProperties = {
    light: {
      background: "#fff",
      color: "#000",
      button: "#000",
    },
    dark: {
      background: "#000",
      color: "#fff",
      button: "#fff",
    },
  };
  const [theme, setTheme] = useState(themeProperties.light);
  //theme toggler
  function toggleTheme() {
    theme === themeProperties.light
      ? setTheme(themeProperties.dark)
      : setTheme(themeProperties.light);
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
