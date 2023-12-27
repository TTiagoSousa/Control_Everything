import React from 'react';
import './Currency_Api_Dashboard.scss';
import * as Componente from '../../../../Imports/components';
import useFetchUpdateCurrencies from '../../../../Hooks/Currencies/useFetchUpdateCurrencies';

const Currency_Api_Dashboard = () => {

  const { UpdadeCurrenciesApi, update } = useFetchUpdateCurrencies()

  return (
    
    <div className='Country_Api_Dashboard'>
      <section className='Section_N1'>
        <div>
        <Componente.Global_Button 
            onClick={UpdadeCurrenciesApi}
            Text={update ? 'Loading' : 'Update Currencies Api'}
            disabled={update}
          />
        </div>
      </section>
    </div>
  )
};

export default Currency_Api_Dashboard;
