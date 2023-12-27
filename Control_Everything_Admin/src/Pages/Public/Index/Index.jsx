import React from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';
import * as Component from '../../../Imports/components';

const Index = () => {
  return (
    <div className='Index'>
      <div>
        <Component.Global_Button 
          Text="Login"
          to="/Login"
        />
      </div>
    </div>
  )
};

export default Index;