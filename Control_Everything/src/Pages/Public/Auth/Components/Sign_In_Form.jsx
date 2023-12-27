import React from 'react';
import '../Auth.scss'
import * as Component from '../../../../Imports/components';
import { DataBaseState } from '../../../../Contexts/DataBase_Context';

const Sign_In_Form = ({ Children }) => {

  const { 
    email, setEmail,
    password, setPassword,
    login
   } = DataBaseState();

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Sign in</h1>
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
        {Children}
      </form>   
    </>
  )
}

export default Sign_In_Form