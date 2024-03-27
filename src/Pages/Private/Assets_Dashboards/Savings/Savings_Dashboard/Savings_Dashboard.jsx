import React from 'react';
import './Savings_Dashboard.scss';
import useFetchTotalTransitions from '../../../../../Hooks/Savings/useFetchTotalTransitions';

const Savings_Dashboard = () => {

  const { totalTransitions } = useFetchTotalTransitions();

  return (
    <div className='Savings_Dashboard'>
      {totalTransitions === null ? (
        <section className='Loading'></section>
        ) : totalTransitions === 0 ? 
        <>
        
        </>
       : (
        <>

        </>
      )}
    </div>
  )
}

export default Savings_Dashboard;