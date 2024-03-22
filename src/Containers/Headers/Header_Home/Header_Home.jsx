import React from 'react';
import './Header_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';

const Header_Home = () => {

  const { typeOfNavifation } = NavsState();

  const headerClass = typeOfNavifation === 'Sidebar_Home' ? 'Header_Home With_SideBar' : 'Header_Home';

  return (
    <div className={headerClass}>
      <div className="Left_Side">
      </div>
      <div className="Right_Side">
      </div>
    </div>
  )
};

export default Header_Home;
