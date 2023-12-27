import React from 'react';
import './Header_Index.scss';
import { Link } from 'react-router-dom';
import * as Component from '../../../Imports/components';
import { DataBaseState } from '../../../Contexts/DataBase_Context';

const Header_Index = () => {

  const { authenticated } = DataBaseState();

  return (
    <header className='Header_Index'>
      <div className="Left_Side">
        <div className="Title">
          <h1>Control Everything</h1>
        </div>
      </div>
      <div className="Right_Side">
        { authenticated ? (
            <Link to="CE/Dashboard"><span>Back to Dashboard</span></Link>
          ) : (
            <Link to="Auth"><span>Login or Register</span></Link>
          )
        }
        <div className='Theme_Button'>
          <Component.Change_Theme />
        </div>
        <div className='Sidebar_Button'>
          <Component.Custumize_Sidebar_Button />
        </div>
      </div>
    </header>

  )
}

export default Header_Index;