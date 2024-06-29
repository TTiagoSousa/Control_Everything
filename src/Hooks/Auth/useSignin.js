import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { useNavigate } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { validateEmail } from '../../Utils/email/is.valide.email';
import { useTranslation } from 'react-i18next';

export const useSignin = () => {

  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { setAlert } = NavsState();

  const signin  = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      setAlert({
        open: true,
        message: t("All fields must be filled"),
        type: 'error'
      });
      
      return;
    }

    if (!validateEmail(email)) {
      setAlert({
        open: true,
        message: t("Invalid email"),
        type: 'error'
      });
      
      return;
    }

    try{
      const response = await http.post(`auth-user/sign-in`, {
        email: email,
        password: password,
      });

      const { token, id } = response.data;

      if (token) {
        const decoded = jwt_decode.jwtDecode(token);
  
        Cookies.set('rthtrh3445gv@@firnf1rgher', token);
        Cookies.set('agerg3234rrthrts322455', decoded.id);
      }

      setAlert({
        open: true,
        message: t("Login successful"),
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE/Dashboard');
        window.location.reload();
      }, 5000);
      
    }catch (error) {
      if (error.response && error.response.status === 400) {
        let errorMessage = error.response.data.message;
        errorMessage = t(errorMessage);
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