import React, { useState } from 'react';
import './Create_Saving_Transition_Form.scss';
import * as Component from '../../../Imports/components';import useCreateSavingTransition from '../../../Hooks/Saving_Transitions/useCreateSavingTransition';
;

const Create_Saving_Transition_Form = ({ createSavingTransitionForm, setCreateSavingTransitionForm }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    createSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    transitiontype, setTransitiontype,
  } = useCreateSavingTransition(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting

    const success = await createSavingTransaction();

    if (success) {
      setTimeout(() => {
        setCreateSavingTransitionForm(false);
        setIsSubmitting(false); // Reset submitting state
      }, 2000); // 2000 milliseconds delay
    } else {
      setIsSubmitting(false); // Reset submitting state in case of failure
    }
  }

  const handleTransactionTypeChange = (type, e) => {
    e.preventDefault(); // Prevent the default form submission
    setTransitiontype(type);
  };

  return (
    <>
  
      <Component.Dark_Div 
        toggled={setCreateSavingTransitionForm}
        toggle={createSavingTransitionForm}
      />

      <div className="Alert">
        <Component.Mui_Alert />
      </div>

      <div className={`Create_Saving_Transition ${createSavingTransitionForm ? 'active' : ''}`}>
        <form action="">
          <div className='Field_Transition_Type'>
            <button
              className={transitiontype === 'Deposit' ? 'active' : ''}
              onClick={(e) => handleTransactionTypeChange('Deposit', e)}
              value="Deposit"
            >
              Deposit
            </button>
            <button
              className={transitiontype === 'Withdraw' ? 'active' : ''}
              onClick={(e) => handleTransactionTypeChange('Withdraw', e)}
              value="Withdraw"
            >
              Withdraw
            </button>
          </div>
          <div className="Input_Field">
            <Component.Currency_Selector 
              currency={currencyType}
              setCurrency={setCurrencyType}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Data"
              Type="date"
              Value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Hour"
              Type="hour"
              Value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Platform"
              Type="text"
              Value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Amount"
              Type="text"
              Value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="Button_Field">
            <Component.Global_Button 
              Text={isSubmitting ? "Loading" : "Create Transition"}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </>
  )
};

export default Create_Saving_Transition_Form;