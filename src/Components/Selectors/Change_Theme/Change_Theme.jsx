import React, { useState, useEffect, useRef } from 'react';
import './Change_Theme.scss';
import { ThemeState } from '../../../Contexts/Theme_Context';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';

const Change_Theme = () => {

  const { handleDarkMode, handleLightMode, mode, handleAutoMode } = ThemeState();

  const [open, setOpen] = useState(false);

  const getIcon = () => {
    if(mode === 'auto') {
      return <Icon.Circle_Half Global_Color={Color.blue_darker} />;
    } else if (mode === 'dark') {
      return <Icon.Moon_N1 Global_Color={Color.blue_darker} />;
    } else if (mode === 'light') {
      return <Icon.Sun_N1 Global_Color={Color.blue_darker} />;
    }
  };

  const getCheckIcon = () => {
    if (mode === 'auto') {
      return <Icon.Simple_Check Global_Color={Color.blue_darker}/>; 
    } else if (mode === 'dark') {
      return <Icon.Simple_Check Global_Color={Color.blue_darker}/>; 
    } else if (mode === 'light') {
      return <Icon.Simple_Check Global_Color={Color.blue_darker}/>; 
    }
  };

  const selectMode = (modeFunction) => {
    modeFunction(); 
  };

  let menuRef = useRef();
  
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }      
    };

    document.addEventListener("mousedown", handler);
    
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className='Change_Theme' ref={menuRef}>
      <button onClick={()=>{setOpen(!open)}}>
        <div className="Icon">
          {getIcon()}
        </div>
      </button>
      <div className={`Theme_Options ${open? 'active' : 'inactive'}`}>
        <div className='Arrow'></div>
        <ul>
          <li onClick={() => selectMode(handleDarkMode)}>
            <div className='Text_Icon'>
              <div className='Icon'>
                <Icon.Moon_N1 
                  Global_Color={Color.blue_darker}
                />
              </div>
              <span>Dark Mode</span>
            </div>
            <div className='Check_Icon'>
              <div className='Icon'>
                {mode === 'dark' && getCheckIcon()}
              </div>
            </div>
          </li>
          <li onClick={() => selectMode(handleLightMode)}>
          <div className='Text_Icon'>
            <div className='Icon'>
                <Icon.Sun_N1 
                  Global_Color={Color.blue_darker}
                />
              </div>
              <span>Light Mode</span>
            </div>
            <div className='Check_Icon'>
              <div className='Icon'>
                {mode === 'light' && getCheckIcon()}
              </div>
            </div>
          </li>
          <li onClick={() => selectMode(handleAutoMode)}>
            <div className='Text_Icon'>
              <div className='Icon'>
                <Icon.Circle_Half 
                  Global_Color={Color.blue_darker}
                />
              </div>
              <span>Auto Mode</span>
            </div>
            <div className='Check_Icon'>
              <div className='Icon'>
                {mode === 'auto' && getCheckIcon()}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Change_Theme