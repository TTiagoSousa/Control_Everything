import React from 'react';
import * as Image from '../../../../Imports/images';
import { ThemeState } from '../../../../Contexts/Theme_Context';
import { useTranslation } from 'react-i18next';

const Theme = () => {

  const { t } = useTranslation();

  const { mode, handleDarkMode, handleLightMode } = ThemeState();

  return (
    <div className='Theme'>
      <div className='Theme_Info'>
        <span>{t('Theme')}</span>
        <span>{t('Choose the perfect color mode for your app.')}</span>
      </div>
      <div className='Theme_Option'>
        <div className='Option' onClick={handleLightMode}>
          <img src={Image.Light_Mode} alt="Light Mode" className={mode === 'light' ? 'GreenBoxShadow' : ''}/>
          <div className='Checkbox'>
            <input type="radio" name="mode" checked={mode === 'light'} onChange={handleLightMode}/>
            <span>{t('Light Mode')}</span>
          </div>
        </div>
        <div className='Option' onClick={handleDarkMode}>
          <img src={Image.Dark_Mode} alt="Dark Mode" className={mode === 'dark' ? 'GreenBoxShadow' : ''}/>
          <div className='Checkbox'>
            <input type="radio" name="mode" checked={mode === 'dark'} onChange={handleDarkMode}/>
            <span>{t('Dark Mode')}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Theme;