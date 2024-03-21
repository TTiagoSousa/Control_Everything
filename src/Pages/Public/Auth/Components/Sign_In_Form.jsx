import React from 'react';
import '../Auth.scss'
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';
import { useSignin } from '../../../../Hooks/Auth/useSignin';

const Sign_In_Form = ({ Children }) => {

  const { t } = useTranslation();

  const { signin, email, setEmail, password, setPassword } = useSignin();

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>{t('Login')}</h1>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Email')}
            Type="email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Password')}
            Type="password"
            Value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text={t('Login')}
            onClick={signin}
          />
        </div>
        {Children}
      </form>   
    </>
  )
}

export default Sign_In_Form