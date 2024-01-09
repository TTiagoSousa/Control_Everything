import React, { useState, useEffect, useRef } from 'react';
import './Avatar_Drop_Menu.scss'
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';
import { Link } from 'react-router-dom';

const Avatar_Drop_Menu = () => {

  const [open, setOpen] = useState(false);

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

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className='Avatar_Drop_Menu' ref={menuRef}>
      <button onClick={()=>{setOpen(!open)}}>
        <div className='Icon'>
          <Icon.User 
            Color_N1={Color.blue}
            Color_N2={Color.green}
            Color_N3={Color.green}
          />
        </div>
      </button>
      <div className={`Avatar_Drop_Menu_Options ${open? 'active' : 'inactive'}`}>
        <div className='Arrow'></div>
        <ul>
          <li>
            <div className='Icon'>
              <Icon.Settings 
                Global_Color={Color.blue}
              />
            </div>
            <div className='Option'>
              <Link to="/CE/Settings/Settings_Dashboard" onClick={handleLinkClick}>Settings</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Avatar_Drop_Menu;