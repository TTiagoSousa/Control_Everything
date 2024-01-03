import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import useFetchTotalTransitions from "./useFetchTotalTransitions";
import http from "../../Services/httpService";

const useCreateSavingTransition = () => {

  const { setAlert } = NavsState();

  const [ date, setDate ] = useState('');
  const [ hour, setHour]  = useState('');
  const [ amount, setAmount ] = useState('');
  const [ platform, setPlatform ] = useState('');
  const [ currencyType, setCurrencyType ] = useState();
  const [ transitiontype, setTransitiontype ] = useState('Deposit');

  const {totalTransitions, setTotalTransitions} = useFetchTotalTransitions();

   const [ newTransaction, setNewTransaction ] = useState();

  const createSavingTransaction = async () => {

    if (!date || !hour || !amount || !platform || !transitiontype) {
      setAlert({
        open: true,
        message: "All fields must be filled",
        type: 'error'
      });

      return;
    }

    try {
      const response = await http.post('/saving-transitions/Create', {
        transitiontype: transitiontype,
        data: date,
        hour: hour,
        amount: amount,
        platform: platform,
        currencyType: currencyType,
      });

      setNewTransaction(response.data.savingTransition)
      console.log(newTransaction);
      setAlert({
        open: true,
        message: 'Transition created successfully',
        type: 'success',
      });

      setTotalTransitions(1);

      return true;

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
     
          
          console.error(errorMessage);
          setAlert({
            open: true,
            message: errorMessage,
            type: 'error'
          });
        
      }
    }
  }

  return {
    createSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    transitiontype, setTransitiontype,
    totalTransitions,
    newTransaction
  }
}

export default useCreateSavingTransition;