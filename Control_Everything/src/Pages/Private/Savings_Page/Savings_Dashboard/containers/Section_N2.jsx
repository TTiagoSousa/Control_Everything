import React, { useEffect, useState } from 'react';
import '../Savings_Dashboard.scss';
import useFetchTotalByCurrencyType from '../../../../../Hooks/Saving_Transitions/useFetchTotalByCurrencyType';

const Section_N2 = () => {

  const { totalOnByTypeSavingTransition, totalonSavingTransition } = useFetchTotalByCurrencyType();
  console.log(totalOnByTypeSavingTransition);
  console.log(totalonSavingTransition);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 800;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Section_N2'>
      
    </div>
  )
}

export default Section_N2;
