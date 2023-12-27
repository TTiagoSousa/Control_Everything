import React, { Children, useState } from 'react';
import '../Auth.scss';
import * as Component from '../../../../Imports/components';
import { DataBaseState } from '../../../../Contexts/DataBase_Context';
import { NavsState } from '../../../../Contexts/Navs_Context';
import { BASE_URL } from '../../../../config/urls';
import axios from 'axios';
import * as Utili from '../../../../Imports/utilis';

const Recover_Password_Form = ({ Children }) => {

  const { 
    email, setEmail,
  } = DataBaseState();

  const { 
    setAlert
   } = NavsState();

   const sendEmail = async () => {

    if (!email) {
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

    try {
      const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
        email
      });

      setAlert({
        open: true,
        message: "Email to activate account sent",
        type: 'success'
      });
      
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400){
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Email is not valid'){
          setAlert({
            open: true,
            message: errorMessage,
            type: 'error'
          });
        }
      }
    }
  };

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Recover Password</h1>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Email"
            Type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Button 
            Text="Recover Password"
            onClick={sendEmail}
          />
        </div>
        {Children}
      </form>   
    </>
  )
};

export default Recover_Password_Form;