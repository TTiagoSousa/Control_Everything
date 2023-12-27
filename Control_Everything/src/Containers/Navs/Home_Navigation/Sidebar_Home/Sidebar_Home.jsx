import React, { useEffect, useState } from 'react';
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Color from '../../../../Styles/Colors';
import * as Icon from '../../../../Imports/icons';
import './Sidebar_Home.scss'
import { ThemeState } from '../../../../Contexts/Theme_Context';
import { NavLink, useLocation } from 'react-router-dom';
import { Navigation_Map } from '../Navigation_Map';

const Sidebar_Home = () => {

  const { sidebar_Home } = NavsState();
  const { sidebar_Color_Change } = ThemeState();

  const location = useLocation();

  const [activeItem, setActiveItem] = useState(null);

  // Styles
    const sidebarStyle = {
      backgroundColor: 
        sidebar_Color_Change === 'Dark' ? Color.secundery_color_dark : 
        sidebar_Color_Change === 'Blue' ? Color.blue : '',
    };

    const activeNavLinkStyle = {
      color: 
        sidebar_Color_Change === 'Dark' ? Color.blue :
        sidebar_Color_Change === 'Blue' ? Color.secundery_color_dark : "",
    };

    const TextStyle = {
      color: 
        sidebar_Color_Change === 'Dark' ? Color.gray : 
        sidebar_Color_Change === 'Blue' ? Color.whitte : "",
    };
  // Styles

  // Enables or disables the clicked item in the main navigation.
  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  // Returns class 'active' if the submenu item is active, otherwise returns an empty string.
  const isSubmenuActive = (item) => {
    return activeItem === item ? 'active' : '';
  };

  // Resets the active item when the `sidebar_Home` state changes.
  useEffect(() => {
    setActiveItem(null);
  }, [sidebar_Home]);

  // Enables or disables the submenu when clicked, only if the main navigation is closed.
  const handleSubmenuClick = (item) => {
    if (!sidebar_Home) {
      setActiveItem(item === activeItem ? null : item);
    }
  };

  // Close submenu if click outside of the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the submenu is active and the click is outside the SideBar_Home component
      if (activeItem && !event.target.closest('.SideBar_Home')) {
        setActiveItem(null);
      }
    };

    // Add click event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeItem]);

  return (
    <nav className={`SideBar_Home ${sidebar_Home ? '' : 'active'}`} style={sidebarStyle}>
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
                  <Icon.GLobal_SVG Global_Color={Color.whitte}>{item.icon}</Icon.GLobal_SVG>
                </div>
                <span className="Text">{item.title}</span>
              </div>
              {item.submenuItems && (
                <div className='Icon_Arrow'>
                  <div className={`Arrow ${isSubmenuActive(item.title)}`}>
                    <Icon.Simple_Triangle 
                      Global_Color={Color.whitte}
                    />
                  </div>
                </div>
              )}
            </NavLink>
            {item.submenuItems && (
              <div className={`Div_SubMenu ${isSubmenuActive(item.title)}`} style={sidebarStyle} >
                <div className='Line'>
                  <div></div>
                </div>
                <div className="Nav_Link_Group">
                  {item.submenuItems.map((submenuItem, index) => (
                    <NavLink
                      to={submenuItem.link}
                      className="Hyper_Link"
                      onClick={() => handleSubmenuClick(item.title)}
                      key={index}
                      style={location.pathname === submenuItem.link ? activeNavLinkStyle : TextStyle}
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
  )
};

export default Sidebar_Home;
