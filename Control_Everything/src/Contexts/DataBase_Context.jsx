import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Utili from '../Imports/utilis';
import { NavsState } from './Navs_Context';
import { BASE_URL } from '../config/urls';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as jwt_decode from "jwt-decode";

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const { setAlert } = NavsState();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState ('');
  const [country, setCountry] = useState ('');
  const [confirmPassword, setConfirmPassword ] = useState('');

  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserID] = useState(null);

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password ) {
      setAlert({
        open: true,
        message: "All fields must be filled",
        type: 'error'
      });

      return
    }

    if (!Utili.validateEmail(email)) {
      setAlert({
        open: true,
        message: "Invalid email format",
        type: 'error'
      });
      
      return;
    }
    
    try {

      const response = await axios.post(`${BASE_URL}/auth/signin`, {
        email: email,
        password: password,
      });

      const { token } = response.data;
      if (token) {
        sessionStorage.setItem('token', token);
        var decoded = jwt_decode.jwtDecode(token);
        Cookies.set('Control_Everthing', token);
        Cookies.set('Control_Everthing_ID', decoded.id);
      }

      const userSettings = await axios.get(`${BASE_URL}/user-settings/${decoded.id}/get-user-settings/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      sessionStorage.setItem('userSettings', JSON.stringify(userSettings.data));

      setAlert({
        open: true,
        message: "Login successful",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE/Dashboard');
        window.location.reload();
      }, 3000);

      setAuthenticated(true);

    } catch (error) {
      console.log("Deu erro")
      console.log(error);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        console.log(errorMessage)
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

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
        fullName, setFullName,
        email, setEmail,
        password, setPassword,
        dateOfBirth, setDateOfBirth,
        country, setCountry,
        confirmPassword, setConfirmPassword,
        gender, setGender,
        login,
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






