import React, { useEffect } from 'react';
import * as Component from '../../../../../Imports/components';
import '../Savings_History.scss'
import useModifySavingTransition from '../../../../../Hooks/Saving_Transitions/useModifySavingTransition';

const Modfy_Saving_Transition = ({ modifySavingTransitionForm, setModifySavingTransitionForm, selectedTransition, setTransitionUpdate, show_ModifySavingTransitionForm }) => {

  const { 
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    transitiontype, setTransitiontype,
    handleModifyTransition,
    isSubmitting,
  } = useModifySavingTransition();

  const handleTransactionTypeChange = (type, e) => {
    e.preventDefault(); // Prevent the default form submission
    setTransitiontype(type);
  };

  useEffect(() => {
    if (selectedTransition) {
      setCurrencyType(selectedTransition.currencyType);
      setTransitiontype(selectedTransition.transitiontype);
      setDate(selectedTransition.data);
      setHour(selectedTransition.hour);
      setAmount(selectedTransition.amount);
      setPlatform(selectedTransition.platform);
    }
  }, [selectedTransition]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleModifyTransition(selectedTransition.id);
    setTransitionUpdate({ ...selectedTransition, date, hour, amount, platform, currencyType, transitiontype });
    show_ModifySavingTransitionForm();
  };

  return (
    <>
      <Component.Dark_Div 
        toggled={setModifySavingTransitionForm}
        toggle={modifySavingTransitionForm}
      />

      <div className={`Modfy_Saving_Transition ${modifySavingTransitionForm ? 'active' : ''}`}>
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
              Placeholder={date}
              Value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Hour"
              Type="hour"
              Placeholder={hour}
              Value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Platform"
              Type="text"
              Value={platform}
              Placeholder={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Amount"
              Type="text"
              Value={amount}
              Placeholder={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="Button_Field">
            <Component.Global_Button 
              Text={isSubmitting ? "Loading" : "Create Transition"}
              disabled={isSubmitting}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Modfy_Saving_Transition;
