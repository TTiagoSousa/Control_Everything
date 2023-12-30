import React, { useState } from 'react';
import '../../Settings_Dashboard.scss';
import * as Componente from '../../../../../../Imports/components';
import getCurrencyFromStorage from '../../../../../../Hooks/Currency/getCurrencyFromStorage';

const Currency_Card = () => {

  const { currency } = getCurrencyFromStorage()
  console.log(currency)
  
  return (
    <div className='Settings_Field'>
      <div className='Title'>
        <h1>Currency</h1>
      </div>
      <div className='Selector'>
        <Componente.Currency_Selector 
          currency={currency}
        />
      </div>
    </div>
  )
}

export default Currency_Card;