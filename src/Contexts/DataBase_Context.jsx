import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavsState } from './Navs_Context';
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const navigate = useNavigate();

  const { setAlert } = NavsState();

  const [ authenticated, setAuthenticated ] = useState(false);
  const [ userId, setUserID ] = useState(null);
  
  useEffect(() => {
    const checkAuthentication = () => {

      const token = Cookies.get('rthtrh3445gv@@firnf1rgher');
      const id = Cookies.get('agerg3234rrthrts322455')

      if (token){
        try{

          var decoded = jwt_decode.jwtDecode(token);

          const currentTime = Math.floor(Date.now() / 1000);

          if (decoded.exp < currentTime) {
            handleTokenExpiration();
          } else {
            setUserID(id);
            setAuthenticated(true);
            
          }
        } catch (error){
          handleTokenExpiration();
        }
      }  else{
        setAuthenticated(false);
      }
    }

    const handleTokenExpiration = () =>{
      Cookies.remove('rthtrh3445gv@@firnf1rgher');
      Cookies.remove('agerg3234rrthrts322455'); 

      setAuthenticated(false);
      setUserID(null);

      navigate('/');

      setAlert({
        open: true,
        message: 'Session expired. Please log in again.',
        type: 'warning',
      });
    }

    checkAuthentication();
    
  }, [navigate, setAlert])

  return (
    <DataBase.Provider 
      value={{ 
        authenticated, setAuthenticated,
        userId,setUserID,
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