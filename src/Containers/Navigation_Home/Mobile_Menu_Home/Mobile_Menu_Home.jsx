import React, { useEffect, useState } from 'react';
import './Mobile_Menu_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';
import { navItems } from '../Navigation_Map';
import Dark_Div from '../../../Components/Dark_Div/Dark_Div';

const Mobile_Menu_Home = () => {

  const { mobile_Sidebar_Home, set_Mobile_Sidebar_Home } = NavsState();

  const { sidebar_Color_Change, mode } = ThemeState();

  const location = useLocation();

  // Styles
    const sidebarStyle = {
      backgroundColor: 
        sidebar_Color_Change === 'Dark' ? Color.secundary_color_dark : 
        sidebar_Color_Change === 'Blue' ? Color.blue : '',
    };

    const activeNavLinkStyle = {
      color: 
        sidebar_Color_Change === 'Dark' ? Color.blue :
        sidebar_Color_Change === 'Blue' ? Color.blue : "",
    };

    const TextStyle = {
      color: 
        mode === 'dark' ?   Color.gray : 
        mode === 'light' ?  Color.gray_dark : "",
    };
  
    const IconStyle = {
      fill:
        mode === 'dark' ?   Color.gray : 
        mode === 'light' ?  Color.gray_dark : "",
    };
  
    const activeIconkStyle = {
      fill: 
        mode === 'dark' ? Color.blue :
        mode === 'light' ? Color.blue : "",
    };
  // Styles

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const [isArrowActive, setIsArrowActive] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
    setIsArrowActive(!isArrowActive); // Inverte o estado da classe da seta ao abrir/fechar o submenu
  };

  useEffect(() => {
    setOpenDropdownIndex(null);
    setIsArrowActive(false);
  }, [mobile_Sidebar_Home]);

  const closeSidebar = () => {
    set_Mobile_Sidebar_Home(false); // Fechar a barra lateral móvel
  };
  
  return (
    <>

      <Dark_Div
        toggled={set_Mobile_Sidebar_Home}
        toggle={mobile_Sidebar_Home}
      />

      <nav className={`Mobile_Sidebar_Home ${mobile_Sidebar_Home ? 'active' : ''}`} >
        <div className="Mobile_Menu_Body">
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
                            Global_Color={openDropdownIndex === index ? activeIconkStyle.fill :  IconStyle.fill}
                          >
                            {item.icon}
                          </Icon.GLobal_SVG>
                        </div>
                      </div>
                      <div className='Text'>
                        <span style={openDropdownIndex === index ? activeNavLinkStyle : TextStyle}>{item.text}</span>
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
                          <NavLink key={idx} to={dropdownItem.to} style={location.pathname === dropdownItem.to ? activeNavLinkStyle : TextStyle} onClick={closeSidebar}>
                            <span>{dropdownItem.text}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                </> 
              ) : (
                <NavLink
                  key={index}
                  to={item.to}
                  className='Nav_Item'
                  style={location.pathname === item.to ? activeNavLinkStyle : TextStyle}
                  onClick={closeSidebar}
                >
                  <div className='Icon'>
                    <div>
                    <Icon.GLobal_SVG Global_Color={location.pathname === item.to ? activeIconkStyle.fill : IconStyle.fill}>  
                        {item.icon}
                      </Icon.GLobal_SVG>
                    </div>
                  </div>
                  <div className='Text'>
                    <span>{item.text}</span>
                  </div>
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Mobile_Menu_Home;