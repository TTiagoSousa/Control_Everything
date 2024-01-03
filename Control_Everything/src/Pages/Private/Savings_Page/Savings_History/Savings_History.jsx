import React from 'react';
import './Savings_History.scss';
import Saving_Transition_Table from './Components/Section_N1/Saving_Transition_Table';

const Savings_History = () => {

  return (
    <div className='Savings_History'>

      <div className="Section_N1">
        <Saving_Transition_Table />
      </div>

    </div>
  )
};

export default Savings_History;