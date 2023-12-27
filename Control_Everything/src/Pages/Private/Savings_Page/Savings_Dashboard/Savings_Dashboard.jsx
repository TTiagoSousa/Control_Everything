import React from 'react';
import './Savings_Dashboard.scss'
import First_Transition from './containers/First_Transition';
import useCreateFirstSavingTransition from '../../../../Hooks/Saving_Transitions/useCreateFirstSavingTransition';
import Section_N1 from './containers/Section_N1';

const Savings_Dashboard = () => {

  const { 
    createFirstSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    totalTransitions
  } = useCreateFirstSavingTransition(null);

  const firstTransitionProps = {
    createFirstSavingTransaction,    
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