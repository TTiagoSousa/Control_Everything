import React from 'react';
import './Settings_Dashboard.scss';
import Currency_Card from './Components/Section_N1/Currency_Card';

const Settings_Dashboard = () => {
  return (
    <div className='Settings_Dashboard'>
      <section className='Section_N1'>
        <Currency_Card />
      </section>
    </div>
  )
};

export default Settings_Dashboard;
