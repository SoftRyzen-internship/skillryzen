import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);
export const useThemeContext = () => useContext(ThemeContext);
