import React from 'react';
import './Header_Index.scss';
import Language_Selector from '../../../Components/Selectors/Language_Selector/Language_Selector';
import Change_Theme from '../../../Components/Selectors/Change_Theme/Change_Theme';

const Header_Index = () => {
  return (
    <header className='Header_Index'>
      <div className='Left_Side'>
        <h1>Control Everything</h1>
      </div>
      <div className='Rigth_Side'>
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div className='Button_Field'>
          <Language_Selector />
        </div>
      </div>
    </header>
  )
};

export default Header_Index;
