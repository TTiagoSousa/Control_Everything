import React, { useState } from 'react';
import '../Auth.scss';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import Country_Selector from '../../../../Components/Selectors/Country_Selector/Country_Selector';
import { useTranslation } from 'react-i18next';
import { useSignup } from '../../../../Hooks/Auth/useSignup';

const Sign_Up_Form = () => {

  const { t } = useTranslation();

  const { 
    fullName, setFullName,
    email, setEmail,
    password, setPassword,
    dateOfBirth, setDateOfBirth,
    country, setCountry,
    confirmPassword, setConfirmPassword,
    gender, setGender,
    signup
   } = useSignup();

  return (
    <>
      <form action="#" className="Sign_Up_Form">
        <h1>{t('Register')}</h1>
        <div className="Input_Field">
          <Global_Input 
            Type={t('Email')}
            Text="Email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Full Name')}
            Type="text"
            Value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Birthday')}
            Type="date"
            Value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Country_Selector 
            country={country}
            setCountry={setCountry}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Gender')}
            Type="text"
            Value={gender}
            onChange={(e) => setGender(e.target.value)}
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
          <Global_Input
            Text={t('Confirm Password')} 
            Type="password"
            Value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text={t('Register')} 
            onClick={signup}
          />
        </div>
      </form>   
    </>
  )
}

export default Sign_Up_Form;