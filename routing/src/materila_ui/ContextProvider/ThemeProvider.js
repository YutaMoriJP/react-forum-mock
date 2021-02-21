import React, { useState, useContext, createContext } from "react";

const Theme = createContext();
export const useTheme = () => useContext(Theme);
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <Theme.Provider value={{ isDark, setIsDark }}>{children}</Theme.Provider>
  );
};

export default ThemeContextProvider;
