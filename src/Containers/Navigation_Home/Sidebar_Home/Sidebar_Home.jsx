import React, { useEffect, useState } from 'react';
import './Sidebar_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';
import { navItems } from '../Navigation_Map';

const Sidebar_Home = () => {

  const { sidebar_Home } = NavsState();

  const { sidebar_Color_Change } = ThemeState();

  const location = useLocation();

  // Styles
    const sidebarStyle = {
      backgroundColor: 
        sidebar_Color_Change === 'Dark' ? Color.gray_darker_2 : 
        sidebar_Color_Change === 'Blue' ? Color.blue : '',
    };

    const activeNavLinkStyle = {
      color: 
        sidebar_Color_Change === 'Dark' ? Color.blue :
        sidebar_Color_Change === 'Blue' ? Color.secundary_color_dark : "",
    };

    const TextStyle = {
      color: 
        sidebar_Color_Change === 'Dark' ? Color.gray : 
        sidebar_Color_Change === 'Blue' ? Color.white : "",
    };
  
    const IconStyle = {
      fill:
        sidebar_Color_Change === 'Dark' ? Color.gray : 
        sidebar_Color_Change === 'Blue' ? Color.white : "",
    };
  
    const activeIconkStyle = {
      fill: 
      sidebar_Color_Change === 'Dark' ? Color.blue :
      sidebar_Color_Change === 'Blue' ? Color.gray_darker_2 : "",
    };
  // Styles

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const [isArrowActive, setIsArrowActive] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
    setIsArrowActive(!isArrowActive); // Inverte o estado da classe da seta ao abrir/fechar o submenu
  };

  const isAnyDropdownItemActive = (dropdownItems) => {
    return dropdownItems.some(dropdownItem => location.pathname === dropdownItem.to);
  };

  useEffect(() => {
    setOpenDropdownIndex(null);
    setIsArrowActive(false);
  }, [sidebar_Home]);

  return (
    <nav className={`SideBar_Home ${sidebar_Home ? '' : 'close'}`} style={sidebarStyle}>
      <div className="Sidebar_Body">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.dropdownItems ? (
              <>
                <div style={{position: "relative"}}>
                  <NavLink
                    to={item.to}
                    onClick={() => toggleDropdown(index)}
                    className='Nav_Item_With_Drop_Menu'
                  >
                    <div className='Icon'>
                      <div>
                        <Icon.GLobal_SVG 
                          Global_Color={(openDropdownIndex === index || isAnyDropdownItemActive(item.dropdownItems)) ? activeIconkStyle.fill :  IconStyle.fill}
                        >
                          {item.icon}
                        </Icon.GLobal_SVG>
                      </div>
                    </div>
                    <div className='Text'>
                      <span style={(openDropdownIndex === index || isAnyDropdownItemActive(item.dropdownItems)) ? activeNavLinkStyle : TextStyle}>{item.text}</span>
                      <div className='Icon_Arrow'>
                        <div className={openDropdownIndex === index && isArrowActive ? 'arrow active' : 'arrow'}>
                          <Icon.Simple_Triangle 
                            Global_Color={Color.white}
                          />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  {openDropdownIndex === index && (
                    <div className='DropdownItems'>
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <NavLink key={idx} to={dropdownItem.to} style={location.pathname === dropdownItem.to ? activeNavLinkStyle : TextStyle}>
                          <span>{dropdownItem.text}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <NavLink
                  key={index}
                  to={item.to}
                  className='Nav_Item'
                  style={location.pathname === item.to ? activeNavLinkStyle : TextStyle}
                >
                  <div className='Icon'>
                    <div>
                      <Icon.GLobal_SVG Global_Color={location.pathname === item.to ? activeIconkStyle.fill : IconStyle.fill}>
                        {item.icon}
                      </Icon.GLobal_SVG>
                    </div>
                  </div>
                  <div className={`Text ${sidebar_Home ? '' : 'Close_Sidebar'}`}  >
                    <span>{item.text}</span>
                  </div>
                </NavLink>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar_Home;