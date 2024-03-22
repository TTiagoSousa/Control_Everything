import React, { useState } from 'react';
import './Top_Navigation.scss';
import { Navigation_Map } from '../Navigation_Map';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeState } from '../../../Contexts/Theme_Context';

const Top_Navigation = () => {

  const { mode } = ThemeState();

  // Styles
    const activeNavLinkStyle = {
      color: Color.blue_darker
    };

    const TextStyle = {
      color: 
        mode === 'dark' ? Color.gray :
        mode === 'light' ? Color.gray_dark : '',
    };

    const IconsColor = 
      mode === 'dark' ? Color.whitte :
      mode === 'light' ? Color.blue_darker 
      : null
  // Styles


  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const isSubmenuActive = (item) => {
    return activeItem === item ? 'active' : '';
  };

  return (
    <nav className='Top_Navigation'>
      {Navigation_Map.map((item, index) => (
        <div
          className={`Wrap_Menu ${isSubmenuActive(item)}`} // Alteração aqui
          key={index}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            className="Hyper_Link"
            style={location.pathname === item.link ? activeNavLinkStyle : TextStyle}
            to={item.link}
            key={index}
          >
            <div className="Informations_Link">
              <span className="Text">{item.title}</span>
            </div>
          </NavLink>
          {item.submenuItems && (
            <div className={`Div_SubMenu ${isSubmenuActive(item)}`}>
              <div className="Nav_Link_Group">
                {item.submenuItems.map((submenuItem, index) => (
                  <NavLink
                    to={submenuItem.link}
                    className="Hyper_Link"
                    key={index}
                    style={location.pathname === item.link ? activeNavLinkStyle : TextStyle}
                  >
                    {submenuItem.title}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Top_Navigation;