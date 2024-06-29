import React, { useState } from 'react';
import './Header_Home.scss';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';
import Language_And_Currency_Selector from '../../../Components/Selectores/Language_And_Currency_Selector/Language_And_Currency_Selector ';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { NavsState } from '../../../Contexts/Navs_Context';
import { Sling as Hamburger } from 'hamburger-react';

const Header_Home = () => {

  const { mode } = ThemeState();
  const { typeOfNavifation, setSidebar_Home, sidebar_Home, show_Mobile_Sidebar_Home, showCustomize_Sidebar } = NavsState();

  const [hovered, setHovered] = useState(null);

  const getIcon = () => {
    let color;

    if (mode === 'dark') {
      color = hovered ? Color.gray_light : Color.gray;
    } else if (mode === 'light') {
      color = hovered ? Color.gray_darker : Color.gray_dark;
    } else {
      color = hovered ? Color.blue : Color.gray; 
    }

    if (mode === 'dark') {
      return <Icon.Settings_With_Two_Arrows GlobalColor={color} Color_1={Color.blue} Color_2={Color.blue}/>;
    } else if (mode === 'light') {
      return <Icon.Settings_With_Two_Arrows GlobalColor={color} Color_1={Color.blue} Color_2={Color.blue}/>;
    }
  };

  return (
    <header className='Header_Home'>
      <div className="Left_Side">
        <div className='Menu'>
          {
            typeOfNavifation === 'Sidebar_Home' ? (
              <div className="Hamburger">
                <Hamburger 
                  toggled={sidebar_Home}
                  toggle={setSidebar_Home}
                  size={20}
                  color={Color.blue}
                />
              </div>
            ) :
            typeOfNavifation === 'Mobile_Menu' ?  (
              <button
                onClick={show_Mobile_Sidebar_Home}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            ): <></>
          }
        </div>
      </div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Language_And_Currency_Selector  />
        </div>
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div
          className='Custumize_Sidebar_Button'
          onClick={showCustomize_Sidebar}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {getIcon()}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header_Home