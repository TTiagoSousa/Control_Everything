import React from 'react';
import './Savings_Dashboard.scss'
import First_Transition from './containers/First_Transition';
import useCreateSavingTransition from '../../../../Hooks/Saving_Transitions/useCreateSavingTransition';
import Section_N1 from './containers/Section_N1';

const Savings_Dashboard = () => {

  const { 
    createSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    totalTransitions
  } = useCreateSavingTransition(null);

  const firstTransitionProps = {
    createSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    totalTransitions
  };


  return (
    <div className='Savings_Dashboard'>
      {totalTransitions === null ? (
        <section className='Loading'></section>
      ) : totalTransitions === 0 ? (
        <First_Transition {...firstTransitionProps}/>
      ) : (
        <>
          <Section_N1 />
        </>
      )}
    </div>
  )
}

export default Savings_Dashboard;