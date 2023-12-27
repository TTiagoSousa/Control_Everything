import React from 'react';
import './CE.scss';
import * as Container from '../../../Imports/containers';
import { NavsState } from '../../../Contexts/Navs_Context';
import Private_Routes from '../../../Routes/Private_Routes';

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

      <Container.Header_Home />
      <Container.Custumize_Sidebar/>

      {
        typeOfNavifation === "Sidebar_Home" ? (
          <Container.Sidebar_Home />
        ) : typeOfNavifation === "Mobile_Menu" ? (
          <Container.Mobile_Sidebar_Home />
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