import React from 'react';
import '../Auth.scss';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';

const Sign_Up_Form = () => {

  return (
    <>
      <form action="#" className="Sign_Up_Form">
        <h1>Sign up</h1>
        <div className="Input_Field">
          <Global_Input 
            Type="email"
            Text="Email"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text="Full Name"
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text="Birthday"
            Type="date"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text="Country"
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text="Gender"
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Global_Input
            Text="Passoword" 
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Global_Input
            Text="Confirm Passoword" 
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text="Register"
          />
        </div>
      </form>   
    </>
  )
}

export default Sign_Up_Form;