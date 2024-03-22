import React from 'react';
import './Header_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import Change_Theme from '../../../Components/Selectors/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectors/Language_Selector/Language_Selector';
import { Sling as Hamburger } from 'hamburger-react';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';

const Header_Home = () => {

  const { typeOfNavifation, sidebar_Home, setSidebar_Home,showCustomize_Sidebar } = NavsState();

  const headerClass = typeOfNavifation === 'Sidebar_Home' ? 'Header_Home With_SideBar' : 'Header_Home';

  return (
    <div className={headerClass}>
      <div className="Left_Side">
        <div className='Menu'>
          {
            typeOfNavifation === 'Sidebar_Home' ? (
              <div className="Hamburger">
                <Hamburger 
                  toggled={sidebar_Home}
                  toggle={setSidebar_Home}
                  size={20}
                  color={Color.blue_darker}
                />
              </div>
            ) :
            typeOfNavifation === 'Mobile_Menu' ?  (
              <button
                
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
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div className='Button_Field'>
          <Language_Selector />
        </div>
        <div
          className='Custumize_Sidebar_Button'
          onClick={showCustomize_Sidebar}
        >
          <div>
            <Icon.Settings_With_Two_Arrows 
              GlobalColor={Color.blue_darker} 
              Color_2={Color.blue_darker} 
              Color_1={Color.blue_darker}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header_Home;
