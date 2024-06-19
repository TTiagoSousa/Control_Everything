import React, { useState, useEffect, useRef } from 'react';
import './Language_Selector.scss';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { useTranslation } from 'react-i18next';

const Language_Selector = () => {

  const { i18n } = useTranslation();

  const { mode } = ThemeState();

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Altera o idioma com o i18n
    localStorage.setItem('language', lang); // Armazena o idioma no localStorage
    setOpen(false); // Fecha o menu após a seleção
  };

  const getIconColor = () => {
    if (hovered) {
      return mode === 'light' ? Color.gray_darker : Color.gray_light;
    }
    return mode === 'light' ? Color.gray_dark : Color.gray;
  };

  return (
    <div className='Language_Selector' ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="Icon">
          <Icon.World Global_Color={getIconColor()} />
        </div>
      </button>
      <div className={`Language_Options ${open ? 'active' : 'inactive'}`}>
        <div className='Arrow'></div>
        <ul>
          <li onClick={() => handleChangeLanguage('en')}>
            <span>English</span>
          </li>
          <li onClick={() => handleChangeLanguage('pt')}>
            <span>Português</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Language_Selector;