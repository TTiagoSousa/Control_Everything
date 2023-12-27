import React, { useState } from 'react';
import './Recover_Password.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as Component from '../../../Imports/components';
import * as Image from '../../../Imports/images';
import axios from 'axios';
import { BASE_URL } from '../../../config/urls';
import { NavsState } from '../../../Contexts/Navs_Context';
import * as Utili from '../../../Imports/utilis';

const Recover_Password = () => {

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

      if (!Utili.isPasswordStrong(password)) {
        setAlert({
          open: true,
          message: "Password is not strong enough",
          type: 'error'
        });
        
        return;
      }

      await axios.post(`${BASE_URL}/auth/reset-password/${decodedToken}`, {
        newPassword: password,
      });

      console.log('Fez a chamada ao servidor')

      setAlert({
        open: true,
        message: "Email to activate account sent",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/Auth');
        window.location.reload();
      }, 3000);

    } catch (error) {
      console.error(error);
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
              <h1>Recover Password</h1>
              <div className="Input_Field">
                <Component.Global_Input 
                  Text="Password"
                  Type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="Input_Field">
                <Component.Global_Input 
                  Text="Repete Password"
                  Type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="Input_Field">
                <Component.Global_Button 
                  Text="Change Password"
                  onClick={handleChangePassword}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="Panels_Container">
          <div className="Panel Left_Panel">
            <div className="Content">
              <h1>Did you remember your password?</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <Link to="/Auth">
                <button className="btn transparent">
                  Back do Login
                </button>
              </Link>
            </div>
            <img src={Image.Web3} className="image"/>
          </div>
        </div>
        <div className='Alert'>
          <Component.Mui_Alert />
        </div>
      </div>
    </>
  )
};

export default Recover_Password;