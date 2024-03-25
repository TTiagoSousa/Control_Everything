import React, { useState } from 'react';
import './Recover_Password.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as Image from '../../../Imports/images';
import { NavsState } from '../../../Contexts/Navs_Context';
import http from '../../../Services/httpService';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useTranslation } from 'react-i18next';

const Recover_Password = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useParams();
  const decodedToken = atob(token);

  const handleChangePassword = async () => {

    try {

      if (!password || !confirmPassword) {
        setAlert({
          open: true,
          message: "All fields must be filleds",
          type: 'error'
        });
  
        return;
      }

      const response = await http.post(`auth/reset-password/${decodedToken}`, {
        newPassword: password,
      });

      setAlert({
        open: true,
        message: "Password changed successfully",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/Auth');
        window.location.reload();
      }, 3000);

    } catch (error) {
      if (error.response && error.response.status === 400){
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Passwords Weak') {
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
      <div className='Recover_Password'>
        <div className="Forms_Container">
          <div className="Recover_Password_Form">
            <form action="">
              <h1>{t("Recover Password")}</h1>
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
                  Text={t("Repete Password")}
                  Type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="Input_Field">
                <Global_Button 
                  Text={t("Change password")}
                  onClick={handleChangePassword}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="Panels_Container">
          <div className="Panel Left_Panel">
            <div className="Content">
              <h1>{t("Did you remember your password ?")}</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <Link to="/Auth">
                <button className="btn transparent">
                  {t("Back to login")}
                </button>
              </Link>
            </div>
            <img src={Image.Web3} className="image"/>
          </div>
        </div>
        <div className='Alert'>
          <Mui_Alert />
        </div>
      </div>
    </>
  )
};

export default Recover_Password;