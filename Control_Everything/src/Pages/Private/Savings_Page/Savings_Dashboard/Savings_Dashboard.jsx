import React, { useState, useEffect } from 'react';
import './Savings_Dashboard.scss'
import First_Transition from './containers/First_Transition';
import useCreateSavingTransition from '../../../../Hooks/Saving_Transitions/useCreateSavingTransition';
import Section_N2 from './containers/Section_N2';
import Section_N1 from './containers/Section_N1';

const Savings_Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);

  const { 
    createSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    totalTransitions,
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

  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Savings_Dashboard'>
      {totalTransitions === null ? (
        <section className='Loading'></section>
      ) : totalTransitions === 0 ? 
        <First_Transition {...firstTransitionProps}/>
       : (
        <>
          <Section_N1  
            setIsLoading={setIsLoading} 
            isLoading={isLoading}
          />
          <Section_N2 
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </>
      )}
    </div>
  )
}

export default Savings_Dashboard;