import React from 'react';
import './CE.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import Private_Routes from '../../../Routes/Private_Routes';
import Top_Navigation from '../../../Containers/Home_Navigation/Top_Navigation/Top_Navigation';
import Sidebar_Home from '../../../Containers/Home_Navigation/Sidebar_Home/Sidebar_Home';
import Mobile_Menu_Home from '../../../Containers/Home_Navigation/Mobile_Menu_Home/Mobile_Menu_Home';
import Header_Home from '../../../Containers/Headers/Header_Home/Header_Home';
import Custumize_Sidebar from '../../../Containers/Navs/Custumize_Sidebar/Custumize_Sidebar';

const CE = () => {

  const { typeOfNavifation, sidebar_Home } = NavsState();

  function getNavClass() {
    switch (typeOfNavifation) {
      case "Sidebar_Home":
        return sidebar_Home
          ? "Small_Container_With_SideBar_Open"
          : "Small_Container_With_SideBar_Close";
      case "Mobile_Menu":
        return "Container_With_MobileMenu";
      case "Top_Nav_Navigation" :
        return "Container_With_Top_Navigation"
      default:
        console.log("Invalid position");
        return "";
    }
  }

  return (
    <>

      <Header_Home />
      <Custumize_Sidebar />

      {
        typeOfNavifation === "Sidebar_Home" ? (
          <Sidebar_Home />
        ) : typeOfNavifation === "Mobile_Menu" ? (
          <Mobile_Menu_Home />
        ) : typeOfNavifation === 'Top_Nav_Navigation' ? (
          <Top_Navigation /> 
        ) : null
      }

      <div className='CE'>
        <div className={getNavClass()}>
          <Private_Routes />  
        </div>
      </div>  
    </>
  )
};

export default CE;