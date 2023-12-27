import React from 'react';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import * as Component from '../../../Imports/components';
import './Login.scss';

const Login = () => {

  const { 
    login, 
    email, setEmail,
    password, setPassword
  } = DataBaseState();

  return (
    <>
      <div className='Login'>
        <div className='Alert'>
          <Component.Mui_Alert />
        </div>
        <form>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Email"
              Type="email"
              Value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Password"
              Type="password"
              Value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Button 
              Text="Login"
              onClick={login}
            />
          </div>  
        </form>
      </div>
    </>
  )
};

export default Login;