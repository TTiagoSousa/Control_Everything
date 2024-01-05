import React from 'react';
import './Dashboard.scss';
import Assets_Card from './Components/Section_N1/Assets_Card';
 
const Dashboard = () => {

  return (

    <div className="Dashboard">
      <section className='Section_N1'>
        <Assets_Card />
      </section>
    </div>

  )
};

export default Dashboard;