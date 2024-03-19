import React from 'react';
import '../Auth.scss'
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';

const Sign_In_Form = ({ Children }) => {

  const { t } = useTranslation();

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>{t('Login')}</h1>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Email')}
            Type="email"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Password')}
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text={t('Login')}
          />
        </div>
        {Children}
      </form>   
    </>
  )
}

export default Sign_In_Form