import React, { useState, createContext, useContext, useEffect } from 'react';

const Global = createContext({});

const GlobalContext = ({ children }) => {
  
  // Currency
    const storedCurrency = localStorage.getItem('selectCurrency');
    const [selectCurrency, setSelectCurrency] = useState(storedCurrency || "USD");

    useEffect(() => {
      // Update the local storage whenever selectCurrency changes
      localStorage.setItem('selectCurrency', selectCurrency);
    }, [selectCurrency]);
  // Currency 

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