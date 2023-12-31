import React, { useState, createContext, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import getCurrencyFromStorage from '../Hooks/Currency/getCurrencyFromStorage';

const Global = createContext({});

const GlobalContext = ({ children }) => {
  
  const [selectCurrency, setSelectCurrency] = useState("");
  useEffect(() => {
    // Retrieve user settings from sessionStorage
    const userSettings = sessionStorage.getItem('userSettings');
    if (userSettings) {
      const settings = JSON.parse(userSettings);
      // Set the currency if it exists in the user settings
      if (settings.currency) {
        setSelectCurrency(settings.currency);
      }
    }
  }, []);

  return (
    <Global.Provider 
      value={{ 
        selectCurrency, setSelectCurrency
      }}
    >
      {children}
    </Global.Provider>
  )

};

export default GlobalContext;

export const GlobalState = () => {
  return useContext(Global);
};