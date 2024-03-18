import React from 'react';
import '../Auth.scss';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';

const Recover_Password_Form = ({ Children }) => {

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Recover Password</h1>
        <div className="Input_Field">
          <Global_Input 
            Text="Email"
            Type="email"
          />
        </div>
        <div className="Input_Field">
          <Global_Button 
            Text="Recover Password"
          />
        </div>
        {Children}
      </form>   
    </>
  )
};

export default Recover_Password_Form;