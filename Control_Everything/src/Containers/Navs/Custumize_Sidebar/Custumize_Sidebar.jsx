import React, { useEffect, useState } from 'react';
import './Custumize_Sidebar.scss';
import * as Component from '../../../Imports/components';
import { NavsState } from '../../../Contexts/Navs_Context';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import Choose_Color from './Components/Choose_Color';
import Diviser from './Components/Diviser';
import Toggle_Theme from './Components/Toggle_Theme';
import Type_Of_Navigations from './Components/Type_Of_Navigations';
import Header from './Components/Header';

const Custumize_Sidebar = () => {

  const { customize_Sidebar, setCustomize_Sidebar } = NavsState();
  const { authenticated } = DataBaseState();

  const currentLocation = window.location.pathname;
  const isHomePage = currentLocation === "/CE" || currentLocation.startsWith("/CE/");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    // Limpa o event listener quando o componente for desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <Component.Dark_Div 
       toggled={setCustomize_Sidebar}
       toggle={customize_Sidebar}
      />

      <nav className={`Custumize_Sidebar ${customize_Sidebar ? 'active' : ''}`}>

        <Header />

        <div className='Settings_Container'>
          <Toggle_Theme />
          {authenticated && isHomePage && !isSmallScreen && (
            <>
              <Diviser />
              <Choose_Color />
              <Diviser />
              <Type_Of_Navigations />
              <Diviser />
            </>
          )}
          {authenticated && isHomePage && (
            <>
            </>
          )}
        </div>
      </nav>
    </>
  )
};

export default Custumize_Sidebar;