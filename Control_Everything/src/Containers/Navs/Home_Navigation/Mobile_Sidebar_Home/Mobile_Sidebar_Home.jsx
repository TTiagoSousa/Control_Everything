import React, { useEffect, useState } from 'react';
import './Mobile_Sidebar_Home.scss'
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Component from '../../../../Imports/components';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../../Styles/Colors';
import * as Icon from '../../../../Imports/icons';
import { Navigation_Map } from '../Navigation_Map';
import { ThemeState } from '../../../../Contexts/Theme_Context';

const Mobile_Sidebar_Home = () => {

  const { mobile_Sidebar_Home, set_Mobile_Sidebar_Home, show_Mobile_Sidebar_Home } = NavsState();
  const { mode } = ThemeState();

  const location = useLocation();

  // Styles
    const activeNavLinkStyle = {
      color: Color.blue
    };

    const TextStyle = {
      color: 
        mode === 'dark' ? Color.gray :
        mode === 'light' ? Color.gray_dark : '',
    };

    const IconsColor = 
      mode === 'dark' ? Color.blue :
      mode === 'light' ? Color.blue 
      : null
  // Styles

  const [activeItem, setActiveItem] = useState(null);

  // Enables or disables the clicked item in the main menu.
  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  // Returns class 'active' if the submenu item is active; otherwise, returns an empty string.
  const isSubmenuActive = (item) => {
    return activeItem === item ? 'active' : '';
  };

  // Resets the active item to null when the mobile_Sidebar_Home state changes, ensuring that the active item is reset when closing the mobile menu.
  useEffect(() => {
    setActiveItem(null);
  }, [mobile_Sidebar_Home]);

  // Toggles the state of the active submenu item when a submenu link is clicked, but only if the mobile menu is closed (!mobile_Sidebar_Home).
  const handleSubmenuClick = (item) => {
    if (!mobile_Sidebar_Home) {
      setActiveItem(item === activeItem ? null : item);
    }
  };

  return (
    <>

      <Component.Dark_Div 
        toggled={set_Mobile_Sidebar_Home}
        toggle={mobile_Sidebar_Home}
      />

      <nav className={`Mobile_Sidebar_Home ${mobile_Sidebar_Home ? 'active' : ''}`} >
        <div className='Button'>
          <button
            onClick={show_Mobile_Sidebar_Home}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div className="Links_Section">
          {Navigation_Map.map((item, index) =>(
            <div className="Wrap_Menu">
              <NavLink
                className="Hyper_Link"
                onClick={() => handleClick(item.title)}
                style={location.pathname === item.link ? activeNavLinkStyle : TextStyle}
                to={item.link}
                key={index}
              >
                <div className="Informations_Link">
                  <div className="Icon">
                    <div>
                      <Icon.GLobal_SVG Global_Color={IconsColor}>{item.icon}</Icon.GLobal_SVG>
                    </div>
                  </div>
                  <span className="Text">{item.title}</span>
                </div>
                {item.submenuItems && (
                 <div className='Icon_Arrow'>
                    <div className={`Arrow ${isSubmenuActive(item.title)}`}>
                      <Icon.Simple_Triangle 
                        Global_Color={IconsColor}
                      />
                    </div>
                 </div>
                )}
              </NavLink>
              {item.submenuItems && (
                <div className={`Div_SubMenu ${isSubmenuActive(item.title)}`} >
                  <div className='Line'>
                    <div></div>
                  </div>
                  <div className="Nav_Link_Group">
                    {item.submenuItems.map((submenuItem, index) => (
                      <NavLink
                        to={submenuItem.link}
                        className="Hyper_Link"
                        onClick={() => handleSubmenuClick(item.title)}
                        style={location.pathname === item.link ? activeNavLinkStyle : TextStyle}
                        key={index}
                      >
                        {submenuItem.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Mobile_Sidebar_Home;