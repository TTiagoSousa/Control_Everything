import React from 'react';
import './Country_Api_Dashboard.scss';
import useCompareCountryNames from '../../../../Hooks/Coutries/useCompareCountryNames';
import useFetchUpdateCoutries from '../../../../Hooks/Coutries/useFetchUpdateCoutries';
import * as Componente from '../../../../Imports/components';

const Country_Api_Dashboard = () => {

  const { mismatchWarning } = useCompareCountryNames();
  const {UpdadeCountriesApi, update} = useFetchUpdateCoutries()

  return (
    <div className='Country_Api_Dashboard'>
      {mismatchWarning.length > 0 && (
        <ul>
          {mismatchWarning.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <section className='Section_N1'>
        <div>
          <Componente.Global_Button 
            onClick={UpdadeCountriesApi}
            Text={update ? 'Loading' : 'Update Countries Api'}
            disabled={update}
          />
        </div>
      </section>
    </div>
  )
};

export default Country_Api_Dashboard;
