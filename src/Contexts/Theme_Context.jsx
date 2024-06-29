import React, { useState, createContext, useContext, useEffect } from 'react';

const Theme = createContext({});

const ThemeContext = ({ children }) => {

  // Theme 
    const initialMode = localStorage.getItem('mode') || 'dark';
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

  // Change Sidebar Color
    const [sidebar_Color_Change, setSidebar_Color_Change] = useState(() => {
      const storedColor = localStorage.getItem('sidebar_Color_Change');
      return storedColor ? storedColor : 'Dark';
    });

    const handle_Sidebar_Color_Change = (e) => {
      const color = e.target.value;
      setSidebar_Color_Change(color);
    };

    useEffect(() => {
      localStorage.setItem('sidebar_Color_Change', sidebar_Color_Change);
    }, [sidebar_Color_Change]);
  // Change Sidebar Color

  return (
    <Theme.Provider value={{ 
      mode, handleDarkMode, handleLightMode, handleAutoMode,
      sidebar_Color_Change, setSidebar_Color_Change, handle_Sidebar_Color_Change
      }}>
      {children}
    </Theme.Provider>
  )

};

export default ThemeContext;

export const ThemeState = () => {
  return useContext(Theme);
};