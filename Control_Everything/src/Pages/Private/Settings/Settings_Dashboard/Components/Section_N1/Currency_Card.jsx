import React, { useState } from 'react';
import '../../Settings_Dashboard.scss';
import * as Componente from '../../../../../../Imports/components';
import getCurrencyFromStorage from '../../../../../../Hooks/Currency/getCurrencyFromStorage';
import { GlobalState } from '../../../../../../Contexts/Global_Context';

const Currency_Card = () => {

  const { selectCurrency } = GlobalState();
  
  return (
    <div className='Settings_Field'>
      <div className='Title'>
        <h1>Currency</h1>
      </div>
      <div className='Selector'>
        <Componente.Currency_Selector 
          currency={selectCurrency}
        />
      </div>
    </div>
  )
}

export default Currency_Card;