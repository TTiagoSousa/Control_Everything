import React, { useState } from 'react';
import '../Savings_Dashboard.scss';
import * as Component from '../../../../../Imports/components';
import Create_Saving_Transition_Form from '../Components/Section_N1/Create_Saving_Transition_Form';

const Section_N1 = () => {

  const [ createSavingTransitionForm, setCreateSavingTransitionForm ] = useState(false);
  const showCreateSavingTransitionForm = () => setCreateSavingTransitionForm(true);

  return (
    <>
      <Create_Saving_Transition_Form 
        createSavingTransitionForm={createSavingTransitionForm}
        setCreateSavingTransitionForm={setCreateSavingTransitionForm}
      />

    <div className='Section_N1'>
      <div className="Button_Field">
        <Component.Global_Button 
          Text="Create New Transition"
          onClick={showCreateSavingTransitionForm}
        />
      </div>
      <div className="Button_Field">
        <Component.Global_Button 
          Text="View All Transitions"
          to="Savings_History"
        />
      </div>
    </div>
    
    </>
  )
};

export default Section_N1;