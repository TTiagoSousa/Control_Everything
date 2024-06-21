import React from 'react';
import './CE.scss';
import Private_Routes from '../../../Routes/Private_Routes';
import { NavsState } from '../../../Contexts/Navs_Context';
import Header_Home from '../../../Containers/Headers/Header_Home/Header_Home';

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
      default:
        console.log("Invalid position");
        return "";
    }
  }

  return (
    <>

      <Header_Home />

      {
        typeOfNavifation === "Sidebar_Home" ? (
          <></>
        ) : typeOfNavifation === "Mobile_Menu" ? (
          <></>
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
