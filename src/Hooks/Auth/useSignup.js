import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { useTranslation } from 'react-i18next';
import { validateEmail } from '../../Utils/email/is.valide.email';
import { isPasswordStrong } from '../../Utils/password/is.password.strong';
import { containsOnlyLetters } from '../../Utils/text/contains.only.letters';

export const useSignup = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState();
  const [country, setCountry] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [creatingAccount, setCreatingAccount] = useState(false);


  const signup = async (e) => {
    e.preventDefault();

    setCreatingAccount(true);

    if (!email || !password || !fullName || !gender || !dateOfBirth || !country || !confirmPassword) {
      setAlert({
        open: true,
        message: t("All fields must be filled"),
        type: 'error'
      });
      setCreatingAccount(false);
      return;
    }

    if (!validateEmail(email)) {
      setAlert({
        open: true,
        message: t("Invalid email"),
        type: 'error'
      });
      setCreatingAccount(false);
      return;
    }

    if (!containsOnlyLetters(fullName)) {
      setAlert({
        open: true,
        message: t("The full name can only contain letters only"),
        type: 'error'
      });
      setCreatingAccount(false);
      return;
    }

    if (!isPasswordStrong(password)) {
      setAlert({
        open: true,
        message: t("Password weak"),
        type: 'error'
      });
      setCreatingAccount(false);
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: t("Passwords do not match"),
        type: 'error'
      });
      setCreatingAccount(false);
      return;
    }

    try {
      const response = await http.post(`auth-user/sign-up`, {
        email,
        password,
        fullName,
        confirmPassword,
        dateOfBirth,
        country,
        gender
      });

      setAlert({
        open: true,
        message: t("Email to activate account sent"),
        type: 'success'
      });

      setTimeout(() => {
        window.location.href = '/Sign_In';
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
    } finally {
      setCreatingAccount(false);
    }
  };


  return {
    fullName, setFullName,
    email, setEmail,
    password, setPassword,
    dateOfBirth, setDateOfBirth,
    country, setCountry,
    confirmPassword, setConfirmPassword,
    gender, setGender,
    creatingAccount,
    signup
  };
};