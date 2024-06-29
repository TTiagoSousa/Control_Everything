import React from 'react';
import './Reset_Password.scss';
import * as Video from '../../../Imports/video' 
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';
import { useResetPassword } from '../../../Hooks/Auth/useResetPassword';

const Reset_Password = () => {

  const { t } = useTranslation();

  const { token } = useParams();

  const {     
    password, setPassword,
    confirmPassword, setConfirmPassword,
    resetPassword 
  } = useResetPassword(token)

  return (
    <div className='Reset_Password'>

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
            <h1>{t('Recover Password')}</h1>
          </div>
          <div className="Input_Field">
            <Global_Input 
              Text={t('Password')}
              Type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input 
              Text={t('Repite password')}
              Type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='Button_Field'>
            <Global_Button 
              Text={t('Recover password')}
              onClick={resetPassword}
            />
          </div>
        </form>
        <div className='Info'>
          <div>
            <span>{t('Back to main page ?')}</span>
            <Link to="/">{t('Main page')}</Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Reset_Password;
