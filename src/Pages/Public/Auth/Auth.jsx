import React, { useState } from 'react';
import './Auth.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import * as Image from '../../../Imports/images';
import Sign_Up_Form from './Components/Sign_Up_Form';
import Sign_In_Form from './Components/Sign_In_Form';
import Recover_Password_Form from './Components/Recover_Password_Form';

const Auth = () => {

  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isRecoverPasswordMode, setIsRecoverPasswordMode] = useState(false);

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const toggleRecoverPasswordMode = () => {
    setIsRecoverPasswordMode(!isRecoverPasswordMode);
  };

  return (
    <div className={`Auth ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="Forms_Container">
        <div className="Signin_Signup">
          {isRecoverPasswordMode ? (
            <Recover_Password_Form 
              Children={
                <div className="Input_Field">
                  <Global_Button
                    Text="Back to Login"
                    onClick={toggleRecoverPasswordMode}
                  />
                </div>   
              }
            />
            ) : (
            <Sign_In_Form 
              Children={
                <div className="Input_Field">
                  <Global_Button
                    Text="Recover Password"
                    onClick={toggleRecoverPasswordMode}
                  />
                </div>   
              }
            />
          )}
        <Sign_Up_Form/>

        </div>
      </div>

      <div className="Panels_Container">
        <div className="Panel Left_Panel">
          <div className="Content">
            <h1>New here ?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src={Image.Web3} className="image" alt="" />
        </div>
        <div className="Panel Right_Panel">
          <div className="Content">
            <h1>One of us ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={toggleSignUpMode}>
              Sign in
            </button>
          </div>
          <img src={Image.Web3} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;