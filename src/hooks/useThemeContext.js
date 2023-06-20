import { createContext, useContext } from 'react';

const ThemeContext = createContext('dark');

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { useThemeContext, ThemeContext };
