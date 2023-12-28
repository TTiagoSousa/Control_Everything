import React from 'react';
import './Savings_History.scss';
import useFetchSavingsTransitions from '../../../../Hooks/Saving_Transitions/useFetchSavingsTransitions';

const Savings_History = () => {

  const {savingTransitionsList} = useFetchSavingsTransitions()
  console.log(savingTransitionsList)

  return (
    <div className='Savings_History'>

    </div>
  )
};

export default Savings_History;