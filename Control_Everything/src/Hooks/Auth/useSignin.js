import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import * as Utili from '../../Imports/utilis';
import http from "../../Services/httpService";
import Cookies from 'js-cookie';
import * as jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export const useSignin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAlert } = NavsState();
  const navigate = useNavigate();

  const signin  = async (e) => {
    e.preventDefault();

    console.log("Entrou no signin")

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

      const response = await http.post(`/auth/signin`, {
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

      const userSettings = await http.get(`/user-settings/${decoded.id}/get-user-settings/`);

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

  return {
    email, setEmail,
    password, setPassword,
    signin
  }
}