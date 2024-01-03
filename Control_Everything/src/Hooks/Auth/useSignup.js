import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import * as Utili from '../../Imports/utilis';
import http from "../../Services/httpService";
import { BASE_URL } from "../../config/urls";

export const useSignup = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState ('');
  const [country, setCountry] = useState ('');
  const [confirmPassword, setConfirmPassword ] = useState('');

  const { setAlert } = NavsState();

  const signup  = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName || !gender || !dateOfBirth || !country || !confirmPassword) {
      setAlert({
        open: true,
        message: "All fields must be filleds",
        type: 'error'
      });
      
      return;
    }

    if (!Utili.validateEmail(email)) {
      setAlert({
        open: true,
        message: "Invalid email format",
        type: 'error'
      });
      
      return;
    }

    if (!Utili.calculateUserAge(dateOfBirth)) {
      setAlert({
        open: true,
        message: "You must be at least 16 years old to create an account.",
        type: 'error'
      });
      
      return;
    }

    if (!Utili.isPasswordStrong(password)) {
      setAlert({
        open: true,
        message: "Password is not strong enough",
        type: 'error'
      });
      
      return;
    }

    const isCountryValid = await Utili.valideCountry(country);
    if (!isCountryValid) {
      setAlert({
        open: true,
        message: "Invalid country",
        type: 'error'
      });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: 'error'
      });

      return;
    }

    if(!Utili.containsOnlyLetters(fullName)) {
      setAlert({
        open: true,
        message: "Full name must contain only letters",
        type: 'error'
      });
      
      return;
    }

    try{
      const response = await http.post(`${BASE_URL}/auth/signup`, {
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
        message: "Email to activate account sent",
        type: 'success'
      });
      
    }catch (error) {
      console.log('Entrou nos erros')
      console.log(error)
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        console.log("Error message from server:", errorMessage);
    
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

  return {
    fullName, setFullName,
    email, setEmail,
    password, setPassword,
    dateOfBirth, setDateOfBirth,
    country, setCountry,
    confirmPassword, setConfirmPassword,
    gender, setGender,
    signup
  }
}