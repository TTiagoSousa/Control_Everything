import React, { useState, useEffect, useRef } from 'react';
import './Change_Theme.scss';
import { ThemeState } from '../../../Contexts/Theme_Context';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { useTranslation } from 'react-i18next';

const Change_Theme = () => {

  const { t } = useTranslation();

  const { handleDarkMode, handleLightMode, mode, handleAutoMode } = ThemeState();

  const [open, setOpen] = useState(false);

  const [hovered, setHovered] = useState(null);

  const getIcon = () => {
    let color;

    if (mode === 'dark') {
      color = hovered ? Color.gray_light : Color.gray;
    } else if (mode === 'light') {
      color = hovered ? Color.gray_darker : Color.gray_dark;
    } else {
      color = hovered ? Color.blue : Color.gray; 
    }

    if (mode === 'dark') {
      return <Icon.Moon_N1 Global_Color={color} />;
    } else if (mode === 'light') {
      return <Icon.Sun_N1 Global_Color={color} />;
    }
  };


  const getCheckIcon = () => {
    if (mode === 'auto') {
      return <Icon.Simple_Check Global_Color={Color.blue}/>; 
    } else if (mode === 'dark') {
      return <Icon.Simple_Check Global_Color={Color.blue}/>; 
    } else if (mode === 'light') {
      return <Icon.Simple_Check Global_Color={Color.blue}/>; 
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
        <div 
          className="Icon" 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
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
                  Global_Color={Color.blue}
                />
              </div>
              <span>{t("Dark Mode")}</span>
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
                  Global_Color={Color.blue}
                />
              </div>
              <span>{t("Light Mode")}</span>
            </div>
            <div className='Check_Icon'>
              <div className='Icon'>
                {mode === 'light' && getCheckIcon()}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Change_Theme