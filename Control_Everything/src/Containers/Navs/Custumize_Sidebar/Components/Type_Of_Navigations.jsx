import React, { useState, useEffect, useRef } from 'react';
import '../Custumize_Sidebar.scss';
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';

const Type_Of_Navigations = () => {

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

  const iconClassName = `Arrow ${open ? 'active' : ''}`;

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
    // Adicione mais mapeamentos conforme necessário
  };

  return (
    <div className='Type_Of_Navigations'>
      <div className='Text'> 
        <h1>Navigation Position</h1>
        <span>Select a suitable navigation system for your web application</span>
      </div>
      <div className='Choose_The_Type' onClick={() => { windowWidth >= 1000 && setOpen(!open) }}>
        <div>
          <span>Select Value:</span>
          <span>{navigationLabels[typeOfNavifation]}</span>
        </div>
        <div className='Icon'> 
          <div className={iconClassName}>
            <Icon.Simple_Triangle  Global_Color={Color.whitte}/>
          </div>
        </div>
      </div>
      <div className={`Navigation_Options ${open? 'active' : 'inactive'}`}>
        <div onClick={() => handleNavtigationrSelection("Sidebar_Home")}><span>Sidebar Navigation</span></div>
        <div onClick={() => handleNavtigationrSelection("Mobile_Menu")}><span>Mobile Menu Navigation</span></div>
      </div>
    </div>  
  )
};

export default Type_Of_Navigations;
