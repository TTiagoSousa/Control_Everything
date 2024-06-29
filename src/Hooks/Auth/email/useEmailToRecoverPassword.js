import { useTranslation } from "react-i18next";
import { NavsState } from "../../../Contexts/Navs_Context";
import { validateEmail } from "../../../Utils/email/is.valide.email";
import http from "../../../Services/httpService";
import { useState } from "react";

export const useEmailToRecoverPassword = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const [email, setEmail] = useState('');

  const sendEmailToRecoverPassword = async (e) => {
    e.preventDefault();

    if (!email) {
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

      const response = await http.post(`auth-user/send-email-to-reset-password-user`, {
        email: email,
      });

      setAlert({
        open: true,
        message: t("Email to recover passowrd send"),
        type: 'success'
      });

      setTimeout(() => {
        window.location.href = '/Sign_In';
      }, 3000);

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
    sendEmailToRecoverPassword,
    email, setEmail
  };
}