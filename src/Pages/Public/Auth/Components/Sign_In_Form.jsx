import React from 'react';
import '../Auth.scss'
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';

const Sign_In_Form = ({ Children }) => {

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Sign in</h1>
        <div className="Input_Field">
          <Global_Input 
            Text="Email"
            Type="email"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text="Password"
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text="Login"
          />
        </div>
        {Children}
      </form>   
    </>
  )
}

export default Sign_In_Form