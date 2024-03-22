import React  from 'react';
import './Custumize_Sidebar.scss';
import Dark_Div from '../../../Components/Dark_Div/Dark_Div';
import { NavsState } from '../../../Contexts/Navs_Context';
import Header from './Components/Header';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import Type_Of_Navigations from './Components/Type_Of_Navigations';

const Custumize_Sidebar = () => {

  const { customize_Sidebar, setCustomize_Sidebar } = NavsState();

  const { authenticated } = DataBaseState();

  const currentLocation = window.location.pathname;
  const isHomePage = currentLocation === "/CE" || currentLocation.startsWith("/CE/");

  return (
    <>

      <Dark_Div 
        toggled={setCustomize_Sidebar}
        toggle={customize_Sidebar}
      />

      <nav className={`Custumize_Sidebar ${customize_Sidebar ? 'active' : ''}`}>
        <Header />
        <div className='Settings_Container'>
          {authenticated && isHomePage && (
            <Type_Of_Navigations />
          )}
        </div>
      </nav>
    </>
  )
}

export default Custumize_Sidebar;
