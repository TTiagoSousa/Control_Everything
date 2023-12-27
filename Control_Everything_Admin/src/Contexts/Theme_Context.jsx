// React More CSS
import React, { useState, createContext, useContext, useEffect } from 'react';
// React More CSS

const Theme = createContext({});

const ThemeContext = ({ children }) => {

  // Theme 
    const initialMode = localStorage.getItem('mode') || 'light';
    const [mode, setMode] = useState(initialMode);

    const handleDarkMode = () => {
      localStorage.setItem('mode', 'dark');
      setMode('dark');
    };
        
    const handleLightMode = () => {
      localStorage.setItem('mode', 'light');
      setMode('light');
    }

    const handleAutoMode = () => {
      localStorage.setItem('mode', 'auto');
      setMode('auto')
    }

    useEffect(() => {

      if(mode === 'light'){
        document.body.className = 'Light_Mode'
      } else if(mode === 'dark'){
        document.body.className = 'Dark_Mode'
      } else {
        const currentTime = new Date().getHours();
        if (currentTime >= 20 || currentTime < 7) {
          document.body.className = 'Dark_Mode'
        } else {
          document.body.className = 'Light_Mode'
        }
      }

    }, [mode]);
  // Theme

  return (
    <Theme.Provider value={{ 
        mode, handleDarkMode, handleLightMode, handleAutoMode,
      }}>
      {children}
    </Theme.Provider>
  )

};

export default ThemeContext;

export const ThemeState = () => {
  return useContext(Theme);
};