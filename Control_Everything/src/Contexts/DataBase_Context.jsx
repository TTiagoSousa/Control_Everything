import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/urls';
import axios from 'axios';
import Cookies from 'js-cookie';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserID] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = Cookies.get('Control_Everthing');
      const id = Cookies.get('Control_Everthing_ID');
  
      if (token) {
        try {
          const response = await axios.get(`${BASE_URL}/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

  
          setUserID(id);
          setAuthenticated(true);
        } catch (error) {
          console.error(error);
  
          if (error.response && error.response.status === 401) {

            Cookies.remove('Control_Everthing');
            Cookies.remove('Control_Everthing_ID');
            setAuthenticated(false);
            navigate('/Auth');
          }
        }
      }
    };
  
    checkAuthentication();
  }, []);

  return (
    <DataBase.Provider 
      value={{ 
        authenticated,
        userId,
      }}
    >
      {children}
    </DataBase.Provider>
  );
};

export default DataBaseContext;

export const DataBaseState = () => { 
  return useContext(DataBase);
};






