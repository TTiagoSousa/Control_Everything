import React from 'react';
import '../../Dashboard.scss';
import { Link } from 'react-router-dom';
import useFetchTotalByCurrencyType from '../../../../../Hooks/Saving_Transitions/useFetchTotalByCurrencyType';

const Assets_Card = () => {

  const { totalonSavingTransition, baseSymbol } = useFetchTotalByCurrencyType();
  
  console.log(totalonSavingTransition);
  console.log(baseSymbol);

  return (
    <div className='Assets_Card'>
      <header>
        <h1>Type of Assets</h1>
        <div></div>
      </header>
      <body>
        <ul>
          <li>
            <Link className='Title' to="/CE/Savings">Savings Account</Link> 
            <div>
              <span>{totalonSavingTransition}</span>
              <span>{baseSymbol}</span>
            </div>
          </li>
        </ul>
      </body>
      <footer>
        <h1>Choose or asset</h1>
      </footer>
    </div>
  )
};

export default Assets_Card;