import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../Apis_Dashboard.scss';

const Currency_Api_Card = () => {

  return (
    <div className='Api Currency'>
      <div className='Title'>
        <span>Currency List</span>
      </div>
      <div className='Information'>
        <Link to="Currency_Api_Dashboard">Api Dashboard</Link>
      </div>
    </div>
  )
}

export default Currency_Api_Card;