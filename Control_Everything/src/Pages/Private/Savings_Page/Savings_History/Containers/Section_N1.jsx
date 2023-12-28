import React from 'react';
import '../Savings_History.scss';
import * as Container from '../../../../../Imports/containers';
import useFetchSavingsTransitions from '../../../../../Hooks/Saving_Transitions/useFetchSavingsTransitions';

const Section_N1 = () => {

  return (
    <div className='Section_N1'>
      <Container.Saving_Transition_Table />
    </div>
  )
  
};

export default Section_N1;