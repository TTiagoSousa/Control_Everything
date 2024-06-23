import React, { useState, useEffect } from 'react';
import '../Custumize_Sidebar.scss';
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';
import { useTranslation } from 'react-i18next';

const Type_Of_Navigations = () => {

  const { t } = useTranslation();

  const { handleTypeofPositionChange, typeOfNavifation, setTypeOfNavifation } = NavsState();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the Choose_Color component
      if (open && !event.target.closest('.Type_Of_Navigations')) {
        setOpen(false);
      }
    };

    // Add click event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  const handleNavtigationrSelection = (string) => {
    setTypeOfNavifation(string);
    handleTypeofPositionChange({ target: { value: string } });
  };

  const iconClassName = `Arrow ${open ? '' : 'active'}`;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1000) {
        setOpen(false); // Fecha o menu se a largura da tela for inferior a 1000 pixels
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigationLabels = {
    Sidebar_Home: 'Sidebar Navigation',
    Mobile_Menu: 'Mobile Menu Navigation',
  };

  return (
    <div className='Type_Of_Navigations'>
      <div className='Type_Of_Navigations_Info'> 
        <span>{t("Navigation Position")}</span>
        <span>{t("Select a suitable navigation system for your web application")}</span>
      </div>
      <div className='Choose_The_Type' onClick={() => { windowWidth >= 1000 && setOpen(!open) }}>
        <div className='Information'>
          <span>{t("Navigation :")}</span>
          <span>{t(navigationLabels[typeOfNavifation])}</span>
        </div>
        <div className='Icon'> 
          <div className={`Arrow ${open? 'active' : 'inactive'}`}>
            <Icon.Simple_Triangle  Global_Color={Color.white}/>
          </div>
        </div>
      </div>
      <div className={`Navigation_Options ${open? 'active' : 'inactive'}`}>
        <div onClick={() => handleNavtigationrSelection("Sidebar_Home")}>
          <span className={typeOfNavifation === "Sidebar_Home" ? "selected" : ""}>{t("Sidebar Navigation")}</span>
        </div>
        <div onClick={() => handleNavtigationrSelection("Mobile_Menu")}>
          <span className={typeOfNavifation === "Mobile_Menu" ? "selected" : ""}>{t("Mobile Menu Navigation")}</span>
        </div>
      </div>
    </div>  
  )
};

export default Type_Of_Navigations;
