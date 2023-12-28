import React, { useState } from 'react';
import '../Savings_Dashboard.scss';
import * as Component from '../../../../../Imports/components';
import * as Container from '../../../../../Imports/containers';

const Section_N1 = () => {

  const [ createSavingTransitionForm, setCreateSavingTransitionForm ] = useState(false);
  const showCreateSavingTransitionForm = () => setCreateSavingTransitionForm(true);

  return (
    <div className='Section_N1'>
      <Container.Create_Saving_Transition_Form 
        createSavingTransitionForm={createSavingTransitionForm}
        setCreateSavingTransitionForm={setCreateSavingTransitionForm}
      />
      <div className="Button_Field">
        <Component.Global_Button 
          Text="Create New Transition"
          onClick={showCreateSavingTransitionForm}
        />
      </div>
    </div>
  )
};

export default Section_N1;