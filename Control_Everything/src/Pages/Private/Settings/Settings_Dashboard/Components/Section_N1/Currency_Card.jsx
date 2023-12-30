import React from 'react';
import '../../Settings_Dashboard.scss';
import * as Componente from '../../../../../../Imports/components';

const Currency_Card = () => {
  return (
    <div className='Settings_Field'>
      <div className='Title'>
        <h1>Currency</h1>
      </div>
      <div className='Selector'>
        <Componente.Currency_Selector />
      </div>
    </div>
  )
}

export default Currency_Card;