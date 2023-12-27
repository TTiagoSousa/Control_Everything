import React, { useState, useEffect, useRef } from 'react';
import '../Custumize_Sidebar.scss';
import { ThemeState } from '../../../../Contexts/Theme_Context';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';

const Choose_Color = () => {

  const { sidebar_Color_Change, handle_Sidebar_Color_Change, setSidebar_Color_Change } = ThemeState();

  const [open, setOpen] = useState(false);

  const handleColorSelection = (color) => {
    setSidebar_Color_Change(color);
    handle_Sidebar_Color_Change({ target: { value: color } });
  };

  const iconClassName = `Arrow ${open ? 'active' : ''}`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the Choose_Color component
      if (open && !event.target.closest('.Choose_Color')) {
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

  return (
    <div className="Choose_Color">
      <div className="Text" >
        <h1>Choose a color to Sidebar</h1>
        <span>What's your color?</span>
      </div>
      <div className='Choose_Type_Color' onClick={()=>{setOpen(!open)}} >
        <div>
          <span>Select Value:</span>
          <span>{sidebar_Color_Change}</span>
        </div>
        <div className='Icon'> 
          <div className={iconClassName}>
            <Icon.Simple_Triangle  Global_Color={Color.whitte}/>
          </div>
        </div>
      </div >
        <div className={`Colors_Options ${open? 'active' : 'inactive'}`}>
          <div className='Dark' onClick={() => handleColorSelection("Dark")}><span>Dark</span></div>
          <div className='Blue' onClick={() => handleColorSelection("Blue")}><span>Blue</span></div>
        </div>
    </div>
  )
}

export default Choose_Color;
