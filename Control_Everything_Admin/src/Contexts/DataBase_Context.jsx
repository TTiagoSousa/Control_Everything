import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/urls';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as jwt_decode from "jwt-decode";
import { NavsState } from './Navs_Context';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const navigate = useNavigate();

  const { setAlert } = NavsState()

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
    
    try {

      const response = await axios.post(`${BASE_URL}/auth/signin`, {
        email: email,
        password: password,
      });

      const { token, id } = response.data;
      if (token) {
        const decoded = jwt_decode.jwtDecode(token);
  
        if (decoded.role !== "ADMIN") {
          setAlert({
            open: true,
            message: "Only ADMIN users are allowed to login.",
            type: 'error'
          });

          return;
        }
  
        sessionStorage.setItem('token', token);
        Cookies.set('Control_Everyting_Admin', token);
        Cookies.set('Control_Everyting_Admin_ID', decoded.id);
      }

      setAlert({
        open: true,
        message: "Login successful",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE_Work_Space');
        window.location.reload();
      }, 3000);

      setAuthenticated(true);

    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        setAlert({
          open: true,
          message: errorMessage,
          type: 'success'
        });
      }
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = Cookies.get('Control_Everyting_Admin');
      const id = Cookies.get('Control_Everyting_Admin_ID')

      if (token) {
        try {
          const response = await axios.get(`${BASE_URL}/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        
        } catch (error) {
          console.error(error);
        }

        setUserID(id)

        setAuthenticated(true);
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
        authenticated
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






