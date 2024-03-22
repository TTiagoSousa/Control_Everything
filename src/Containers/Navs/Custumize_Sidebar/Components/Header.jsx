import React from 'react';
import '../Custumize_Sidebar.scss';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';
import { NavsState } from '../../../../Contexts/Navs_Context';


const Header = () => {

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
                GlobalColor={Color.whitte}
              />
            </div>
            <h1>Settings</h1>
            <button >
              <div>
                <Icon.Back_Square 
                  GlobalColor={Color.whitte}
                />
              </div>
              <span>Reset</span>
            </button>
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
          <span>Set your own customized style</span>
        </div>
      </div>
    </header>
  )
}

export default Header
