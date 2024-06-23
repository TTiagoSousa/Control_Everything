import React from 'react';
import '../Custumize_Sidebar.scss';
import { ThemeState } from '../../../../Contexts/Theme_Context';
import { useTranslation } from 'react-i18next';

const Choose_Color = () => {
  
  const { t } = useTranslation();
  
  const { sidebar_Color_Change, handle_Sidebar_Color_Change, setSidebar_Color_Change } = ThemeState();
  
  const handleColorSelection = (color) => {
    setSidebar_Color_Change(color);
    handle_Sidebar_Color_Change({ target: { value: color } });
  };

  return (
    <div className="Choose_Color">
      <div className='Choose_Color_Info'>
        <span>{t('Choose a color to sidebar')}</span>
        <span>{t("What's your color ?")}</span>
      </div>
      <div className='Color_Options'>
        <div 
          onClick={() => handleColorSelection("Blue")}
          className={`Option ${sidebar_Color_Change === 'Blue' ? 'GreenBoxShadow' : ''}`}
        >
          <div className='Conteiner Blue'>
            <div className='Nav'></div>
            <div className='Header'></div>
            <div className='Cube_1'></div>
            <div className='Cube_2'></div>
            <div className='Cube_3'></div>
            <div className='Cube_4'></div>
          </div>
          <div className='Checkbox'>
            <input type="radio" name="mode" checked={sidebar_Color_Change === 'Blue'} onChange={() => {}} />
            <span>{t('Blue')}</span>
          </div>
        </div>
        <div 
          onClick={() => handleColorSelection("Dark")}
          className={`Option ${sidebar_Color_Change === 'Dark' ? 'GreenBoxShadow' : ''}`}
        >
          <div className='Conteiner Dark'>
            <div className='Nav'></div>
            <div className='Header'></div>
            <div className='Cube_1'></div>
            <div className='Cube_2'></div>
            <div className='Cube_3'></div>
            <div className='Cube_4'></div>
          </div>
          <div className='Checkbox'>
            <input type="radio" name="mode" checked={sidebar_Color_Change === 'Dark'} onChange={() => {}} />
            <span>{t('Dark')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose_Color;