import React, { useEffect, useState } from 'react';
import './Sidebar_Home.scss';
import { Navigation_Map } from './Navigation_Map';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';

const Sidebar_Home = () => {

  const location = useLocation();

  const [activeItem, setActiveItem] = useState(null);

  // Styles
    const activeNavLinkStyle = {
      color: Color.blue
    };

    const TextStyle = {
      color: 
         Color.gray 
    };

  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  // Returns class 'active' if the submenu item is active, otherwise returns an empty string.
  const isSubmenuActive = (item) => {
    return activeItem === item ? 'active' : '';
  };

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
    <>
      <nav className='SideBar_Home'>
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

export default Sidebar_Home;
