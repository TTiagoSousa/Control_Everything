import React, { useEffect, useState } from 'react';
import '../Savings_Dashboard.scss';
import useFetchTotalByCurrencyType from '../../../../../Hooks/Saving_Transitions/useFetchTotalByCurrencyType';
import LinearProgress from '@mui/material/LinearProgress';

const Section_N2 = () => {

  const { totalOnByTypeSavingTransition, setTotalOnByTypeSavingTransition } = useFetchTotalByCurrencyType();
  
  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Section_N2'>
      <div className='Total_Saving_Transiton'>
        <div className='Table_Wrapper'>
          <table> 
            <thead>
              <tr>
                <th className="Currency"><span>Currency</span></th>
                <th className="Total_Base_Currency"><span>Total Base Currency</span></th>
                <th className="Total_in_Conversion"><span>Total in Conversion</span></th>
              </tr>
            </thead>
            {isLoading && 
              <div className='Loading'>
                <LinearProgress />
              </div>
            }
            <tbody>
            {!isLoading && ( 
              <>
                {totalOnByTypeSavingTransition && totalOnByTypeSavingTransition.map((currency) => (
                  <tr key={currency.currencyType}>
                    <td className='currency'>
                      <span>{currency.currencyType}</span>
                    </td>
                    <td className="Total_Base_Currency">
                      <span>{currency.totalAmount}</span>
                      <span className='Symbol'>{currency.symbol}</span>
                    </td>
                    <td className="Total_in_Conversion">
                      <span>{currency.convertedAmount}</span>
                      <span className='Symbol'>{currency.baseCurrencySymbol}</span>
                    </td>
                  </tr>
                ))}
              </> // Add closing curly brace here
            )}
            </tbody>
          </table>
        </div>    
      </div>
    </div>
  )
}

export default Section_N2;
