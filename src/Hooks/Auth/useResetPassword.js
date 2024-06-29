import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { isPasswordStrong } from '../../Utils/password/is.password.strong';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useResetPassword = (token) => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const decodedToken = atob(token);

  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();

    if ( !password ||  !confirmPassword) {
      setAlert({
        open: true,
        message: t("All fields must be filled"),
        type: 'error'
      });

      return;
    }

    if (!isPasswordStrong(password)) {
      setAlert({
        open: true,
        message: t("Password weak"),
        type: 'error'
      });

      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: t("Passwords do not match"),
        type: 'error'
      });

      return;
    }

    try {

      const response = await http.patch(`auth-user/reset-password-user/${decodedToken}`, {
        newPassword: password,
      });

      setAlert({
        open: true,
        message: t("Password changed successfully"),
        type: 'success'
      });

      setTimeout(() => {
        navigate('/Sign_In');
        window.location.reload();
      }, 3000);
      
    } catch (error) {
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
  };


  return {
    password, setPassword,
    confirmPassword, setConfirmPassword,
    resetPassword
  };
};