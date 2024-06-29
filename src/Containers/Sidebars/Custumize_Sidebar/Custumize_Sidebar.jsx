import React  from 'react';
import './Custumize_Sidebar.scss';
import Dark_Div from '../../../Components/Dark_Div/Dark_Div';
import { NavsState } from '../../../Contexts/Navs_Context';
import Header from './Components/Header';
import Theme from './Components/Theme';
import Diviser from './Components/Diviser';
import Type_Of_Navigations from './Components/Type_Of_Navigations';
import Choose_Color from './Components/Choose_Color';

const Custumize_Sidebar = () => {

  const { customize_Sidebar, setCustomize_Sidebar, typeOfNavifation } = NavsState();

  const Menu_Options_Show = typeOfNavifation === "Mobile_Menu" 

  return (
    <>

      <Dark_Div 
        toggled={setCustomize_Sidebar}
        toggle={customize_Sidebar}
      />

      <nav className={`Custumize_Sidebar ${customize_Sidebar ? 'active' : ''}`}>
        <Header />
        <div className='Settings_Container'>
          <Theme />
          <Diviser />
          <Type_Of_Navigations />
          {!Menu_Options_Show && 
            <>
              <Diviser />
              <Choose_Color />
            </>
          }
        </div>
      </nav>
    </>
  )
}

export default Custumize_Sidebar;
