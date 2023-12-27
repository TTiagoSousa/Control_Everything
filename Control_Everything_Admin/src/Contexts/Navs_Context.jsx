// React More CSS
import React, { useState, createContext, useContext, useEffect } from 'react';
// React More CSS

const Navs = createContext({});

const NavsContext = ({ children }) => {

  // Alert  
    const [ alert, setAlert ] = useState({
      open: false, // Alert Close
      message: "", // Alert message
      type: "", // type of alert
    })
  // Alert

  return (
    <Navs.Provider 
      value={{ 
        alert, setAlert,
      }}
    >
      {children}
    </Navs.Provider>
  )

};

export default NavsContext;

export const NavsState = () => {
  return useContext(Navs);
};