import React  from 'react';
import './Custumize_Sidebar.scss';
import Dark_Div from '../../../Components/Dark_Div/Dark_Div';
import { NavsState } from '../../../Contexts/Navs_Context';
import Header from './Components/Header';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import Type_Of_Navigations from './Components/Type_Of_Navigations';
import Diviser from './Components/Diviser';
import Choose_Color from './Components/Choose_Color';

const Custumize_Sidebar = () => {

  const { customize_Sidebar, setCustomize_Sidebar, typeOfNavifation } = NavsState();

  const { authenticated } = DataBaseState();

  const currentLocation = window.location.pathname;

  const isHomePage = currentLocation === "/CE" || currentLocation.startsWith("/CE/");

  const Menu_Options_Show = typeOfNavifation === "Mobile_Menu" || typeOfNavifation === "Top_Nav_Navigation"

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
            <>
              <Type_Of_Navigations />
              {!Menu_Options_Show && 
                <>
                  <Diviser />
                  <Choose_Color />
                </>
              }
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default Custumize_Sidebar;
