import React from 'react';
import './Sign_In.scss';
import * as Video from '../../../Imports/video';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import { useTranslation } from 'react-i18next';
import Global_Button from  '../../../Components/Buttons/Global_Button/Global_Button';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';
import { Link } from 'react-router-dom';
import { useSignin } from '../../../Hooks/Auth/useSignin';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Sign_In = () => {

  const { t } = useTranslation();

  const { 
    signin, 
    email, setEmail, 
    password, setPassword 
  } = useSignin();

  return (
    <div className='Sign_In'>

      <div className='Alert'>
        <Mui_Alert />
      </div>
      
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
            <h1>{t('Sign In')}</h1>
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
              Text={t('Password')}
              Type="password"
              Value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='Button_Field'>
            <Global_Button 
              Text={t('Login')}
              onClick={signin}
            />
          </div>
        </form>
        <div className='Info'>
          <div>
            <span>{t('Forgot your password ?')}</span>
            <Link to="/Recover_Password">{t('Recover Password')}</Link>
          </div>
          <div>
            <span>{t('Do not have an account ?')}</span>
            <Link to="/Sign_Up">{t('Sign Up')}</Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Sign_In;
