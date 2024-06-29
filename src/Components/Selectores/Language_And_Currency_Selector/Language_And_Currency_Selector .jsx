import React, { useState, useEffect, useRef } from 'react';
import './Language_And_Currency_Selector .scss';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { cryptoCurrencies } from '../../../Constants/currencies/cryptoCurrencies';
import { fiduciaryCurrencies } from '../../../Constants/currencies/fiduciaryCurrencies';
import { useTranslation } from 'react-i18next';
import { GlobalState } from '../../../Contexts/Global_Context';

const Language_And_Currency_Selector  = () => {

  const { i18n, t } = useTranslation();

  const { mode } = ThemeState();

  const { setSelectCurrency } = GlobalState(); 

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

  const handleCurrencyChange = (currency) => {
    setSelectCurrency(currency);
    setOpen(false); // Fechar o menu após selecionar uma moeda
  };

  return (
    <div className='Language_Currency_Selector' ref={menuRef}>
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
      <div className={`Language_Currency_Options ${open ? 'active' : 'inactive'}`}>
        <div className='Arrow'></div>
        <div className='Language_Selector'>
          <span className='Title'>{t('Language')}</span>
          <ul>
            <li onClick={() => handleChangeLanguage('en')}>
              <span>English</span>
            </li>
            <li onClick={() => handleChangeLanguage('pt')}>
              <span>Português</span>
            </li>
          </ul>
        </div>
        <div className='Currency_Selector'>
          <span className='Title'>{t('Currency')}</span>
          <ul>
            {cryptoCurrencies.map(currency => (
              <li key={currency.name} onClick={() => handleCurrencyChange(currency.value)}>
                <span>{currency.name}</span>
              </li>
            ))}
            {fiduciaryCurrencies.map(currency => (
              <li key={currency.name} onClick={() => handleCurrencyChange(currency.value)}>
                <span>{currency.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Language_And_Currency_Selector ;