import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import lightTheme from '../config/theme-light';
import darkTheme from '../config/theme-dark';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    // Load the theme preference from AsyncStorage when the component mounts
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const storedTheme = await SecureStore.getItemAsync('themePreference');
      if (storedTheme === 'dark') {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    } catch (error) {
      console.error('Error loading theme preference:', error);
    }
  };

  const toggleTheme = () => {
    // Toggle between themes
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);

    // Save the theme preference to AsyncStorage
    SecureStore.setItemAsync('themePreference', newTheme === darkTheme ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
