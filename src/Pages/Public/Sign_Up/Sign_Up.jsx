import React, { useState } from 'react';
import './Sign_Up.scss';
import * as Video from '../../../Imports/video';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import { useTranslation } from 'react-i18next';
import Global_Input_Forms from '../../../Components/Inputs/Global_Input_Forms/Global_Input_Forms';
import useGenderOptions from '../../../Constants/genderOption';
import Global_Button from  '../../../Components/Buttons/Global_Button/Global_Button';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';
import { Link } from 'react-router-dom';
import Countries_Selector from '../../../Components/Selectores/Countries_Selector/Countries_Selector';
import { useSignup } from '../../../Hooks/Auth/useSignup';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Sign_Up = () => {

  const { t } = useTranslation();

  const [ countryForm, setCountryForm ] = useState(false);
  const showCountryForm = () => setCountryForm(true);

  const [ countryName, setcountryName ] = useState('')
  const [ countryImage, setCountryImage ] = useState('')

  const { 
    fullName, setFullName,
    email, setEmail,
    password, setPassword,
    dateOfBirth, setDateOfBirth,
    country, setCountry,
    confirmPassword, setConfirmPassword,
    gender, setGender,
    signup,
    creatingAccount
   } = useSignup();

  // Gender 
    const genderOptions = useGenderOptions();
    const handleGenderSelection = (selectedGender) => {
      setGender(selectedGender);
    };
  // Gender 

  return (
    <div className='Sign_Up'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <Countries_Selector 
        countryForm={countryForm}
        setCountryForm={setCountryForm}
        setcountryName={setcountryName}
        setCountry={setCountry}
        setCountryImage={setCountryImage}
      />
      
      <div className='Image_Container'>
        <div>
          <video autoPlay loop muted>
            <source src={Video.Mounth} type='video/mp4'/>
          </video>
          <h1>Control Everything</h1>
        </div>
      </div>

      <div className='Form_Container'>
        <header>
          <div className='Button_Field'>
            <Change_Theme />
          </div>
          <div className='Button_Field'>
            <Language_Selector />
          </div>
        </header>
        <form>
          <div className="Title">
            <h1>{t('Sign Up')}</h1>
          </div>
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
              Text={t('Name')}
              Type="text"
              Value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input 
              Text={t('Date of birth')}
              Type="date"
              Value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input_Forms
              Text={t('Country')}
              onclick={showCountryForm}
              selectValue={countryName}
              image={countryImage}
            />
          </div>
          <div className="Input_Field Gender">
            {Object.keys(genderOptions).map((key) => (
              <div key={key} onClick={() => handleGenderSelection(key)}>
                <span className={gender === key ? 'Selected' : ''}>
                  {genderOptions[key]}
                </span>
              </div>
            ))}
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
              Text={t('Repite password')}
              Type="password"
              Value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='Button_Field'>
            <Global_Button 
              Text={creatingAccount ? t('Loading...') : t('Create account')}
              onClick={signup}
            />
          </div>
        </form>
        <div className='Info'>
          <span>{t('Already have a account ?')}</span>
          <Link to="/Sign_In">{t('Sign in')}</Link>
        </div>
      </div>

    </div>
  )
};

export default Sign_Up;
