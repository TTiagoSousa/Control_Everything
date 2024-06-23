import React  from 'react';
import './Custumize_Sidebar.scss';
import Dark_Div from '../../../Components/Dark_Div/Dark_Div';
import { NavsState } from '../../../Contexts/Navs_Context';
import Header from './Components/Header';
import Theme from './Components/Theme';

const Custumize_Sidebar = () => {

  const { customize_Sidebar, setCustomize_Sidebar } = NavsState();

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
        </div>
      </nav>
    </>
  )
}

export default Custumize_Sidebar;
