import React from 'react';
import './Header_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import Change_Theme from '../../../Components/Selectors/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectors/Language_Selector/Language_Selector';

const Header_Home = () => {

  const { typeOfNavifation } = NavsState();

  const headerClass = typeOfNavifation === 'Sidebar_Home' ? 'Header_Home With_SideBar' : 'Header_Home';

  return (
    <div className={headerClass}>
      <div className="Left_Side">
      </div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div className='Button_Field'>
          <Language_Selector />
        </div>
      </div>
    </div>
  )
};

export default Header_Home;
