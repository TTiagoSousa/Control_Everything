import React, { useState } from 'react';
import '../Auth.scss';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import Country_Selector from '../../../../Components/Selectors/Country_Selector/Country_Selector';
import { useTranslation } from 'react-i18next';

const Sign_Up_Form = () => {

  const [ country, setCountry ] = useState('');

  const { t } = useTranslation();

  return (
    <>
      <form action="#" className="Sign_Up_Form">
        <h1>{t('Register')}</h1>
        <div className="Input_Field">
          <Global_Input 
            Type={t('Email')}
            Text="Email"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Full Name')}
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Birthday')}
            Type="date"
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
          />
        </div>
        <div className="Input_Field">
          <Global_Input
            Text={t('Password')}
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Global_Input
            Text={t('Confirm Password')} 
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text={t('Register')} 
          />
        </div>
      </form>   
    </>
  )
}

export default Sign_Up_Form;