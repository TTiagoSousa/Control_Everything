import React from 'react';
import './Header_Home.scss';
import * as Component from '../../../Imports/components';
import * as Color from '../../../Styles/Colors';
import { Sling as Hamburger } from 'hamburger-react';
import { NavsState } from '../../../Contexts/Navs_Context';
import Avatar_Drop_Menu from '../../Navs/Drop_Menus/Avatar_Drop_Menu/Avatar_Drop_Menu';

const Header_Home = () => {

  const { sidebar_Home, setSidebar_Home, typeOfNavifation, show_Mobile_Sidebar_Home } = NavsState();

  return (
    <>
      <header className='Header_Home'>
        <div className="Left_Side">
          <div className="Menu">
            {
              typeOfNavifation === 'Sidebar_Home' ? (
                <Hamburger 
                  toggled={sidebar_Home}
                  toggle={setSidebar_Home}
                  size={20}
                  color={Color.blue}
                />
              ) :
              typeOfNavifation === 'Mobile_Menu' ?  (
                <button
                  onClick={show_Mobile_Sidebar_Home}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
              ): null
            }
          </div>
        </div>
        <div className="Right_Side">
          <div className='Theme_Button'>
            <Component.Change_Theme />
          </div>
          <div className='Theme_Button'>
            <Avatar_Drop_Menu />
          </div>
          <div className='Custumize_Sidebar_Button'>
            <Component.Custumize_Sidebar_Button />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header_Home;