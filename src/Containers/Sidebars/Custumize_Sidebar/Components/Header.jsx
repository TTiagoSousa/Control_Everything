import React from 'react';
import '../Custumize_Sidebar.scss';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';
import { NavsState } from '../../../../Contexts/Navs_Context';
import { useTranslation } from 'react-i18next';

const Header = () => {

  const { t } = useTranslation();

  const { showCustomize_Sidebar  } = NavsState();

  return (
    <header>
      <div className='Circle_N1'></div>
      <div className='Circle_N2'></div>  
      <div className="Container">
        <div className="Top"> 
          <div className="Left">
            <div className='Icon' >
              <Icon.Painting 
                GlobalColor={Color.white}
                Color_1={Color.white}
                Color_2={Color.white}
                Color_3={Color.blue}
                Color_4={Color.gray_dark}
                Color_5={Color.blue}
                Color_6={Color.gray}
                Color_7={Color.gray_darker}
              />
            </div>
            <h1>{t("Settings")}</h1>
          </div>
          <div className="Right">
            <div 
              className='Close_Icon'
              onClick={showCustomize_Sidebar}
            >
              <div className='Line_N1'></div>
              <div className='Line_N2'></div>
            </div>
          </div>
        </div>
        <div className="Bottom">
          <span>{t("Set your own customized style")}</span>
        </div>
      </div>
    </header>
  )
}

export default Header