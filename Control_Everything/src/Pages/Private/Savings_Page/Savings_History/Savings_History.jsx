import React, { useState } from 'react';
import './Savings_History.scss';
import Saving_Transition_Table from './Components/Section_N1/Saving_Transition_Table';
import Modfy_Saving_Transition from './Containers/Modfy_Saving_Transition';
import * as Component from '../../../../Imports/components'

const Savings_History = () => {

  const [ modifySavingTransitionForm, setModifySavingTransitionForm ] = useState(false);
  const show_ModifySavingTransitionForm = () => setModifySavingTransitionForm(true);

  const handleModifyButtonClick = (transition) => {
    setSelectedTransition(transition) // Set the selected transition for modification
    show_ModifySavingTransitionForm(); // Show the modification form
  }

  const [selectedTransition, setSelectedTransition] = useState(null);
  const [transitionUpdate, setTransitionUpdate] = useState(null);

  return (
    <div className='Savings_History'>

      <div className='Alert'>
        <Component.Mui_Alert />
      </div>

      <Modfy_Saving_Transition 
          modifySavingTransitionForm={modifySavingTransitionForm}
          setModifySavingTransitionForm={setModifySavingTransitionForm}
          selectedTransition={selectedTransition}
          transitionUpdate={transitionUpdate}
          setTransitionUpdate={setTransitionUpdate}
          show_ModifySavingTransitionForm={show_ModifySavingTransitionForm}
      />

      <div className="Section_N1">
        <Saving_Transition_Table 
          handleModifyButtonClick={handleModifyButtonClick}
          show_ModifySavingTransitionForm={show_ModifySavingTransitionForm}
          transitionUpdate={transitionUpdate}
        />
      </div>

    </div>
  )
};

export default Savings_History;