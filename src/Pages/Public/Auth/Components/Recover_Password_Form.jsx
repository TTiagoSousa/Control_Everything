import React, { useState } from 'react';
import '../Auth.scss';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';
import { NavsState } from '../../../../Contexts/Navs_Context';
import { validateEmail } from '../../../../Utils/email/is.valide.email';
import http from '../../../../Services/httpService';

const Recover_Password_Form = ({ Children }) => {

  const { t } = useTranslation();

  const [ email, setEmail ] = useState();

  const { setAlert } = NavsState();

  const sendEmail = async () => {

    if (!email) {
      setAlert({
        open: true,
        message: "All fields must be filleds",
        type: 'error'
      });

      return;
    }

    if (validateEmail(!email)) {
      setAlert({
        open: true,
        message: "Invalid email format",
        type: 'error'
      });
      
      return;
    }

    try{

      const response = await http.post(`auth/send-email-to-reset-password`, {
        email: email,
      });

      setAlert({
        open: true,
        message: "Email to recover passowrd send",
        type: 'success'
      });

      setTimeout(() => {
        window.location.href = '/Auth';
      }, 3000);

    }catch (error){
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
  }

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Recover Password</h1>
        <div className="Input_Field">
          <Global_Input 
            Text="Email"
            Type="email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text={t("Recover Password")}
            onClick={sendEmail}
          />
        </div>
        {Children}
      </form>   
    </>
  )
};

export default Recover_Password_Form;