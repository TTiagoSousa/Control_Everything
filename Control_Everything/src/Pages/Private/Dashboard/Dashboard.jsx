import React from 'react';
import './Dashboard.scss';
import Section_N1 from './Components/Section_N1';
import { GlobalState } from '../../../Contexts/Global_Context';
 
const Dashboard = () => {

  return (

    <div className="Dashboard">
      <Section_N1 />
    </div>

  )
};

export default Dashboard;