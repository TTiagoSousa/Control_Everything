import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";

const useCreateSavingTransition = () => {

  const { setAlert } = NavsState();

  const [ date, setDate ] = useState('');
  const [ hour, setHour]  = useState('');
  const [ amount, setAmount ] = useState('');
  const [ platform, setPlatform ] = useState('');
  const [ currencyType, setCurrencyType ] = useState();
  const [ description, setDescription ] = useState();
  const [ transitionType, setTransitionType ] = useState('DEPOSIT');

  const [ newTransaction, setNewTransaction ] = useState();

  const createSavingTransaction = async () => {

    if (!date || !hour || !amount || !platform || !transitionType) {
      setAlert({
        open: true,
        message: "All fields must be filled",
        type: 'error'
      });

      return;
    }

    const descriptionToSend = description || 'None';
    
    const reversedDate = date.split('-').reverse().join('-');
    
    try {
      const response = await http.post('/savings-transitions/create', {
        transitionType: transitionType,
        data: reversedDate,
        hour: hour,
        amount: amount,
        platform: platform,
        currencyType: currencyType,
        description: descriptionToSend
      });

      setNewTransaction(response.data.savingTransition)
 
      setAlert({
        open: true,
        message: 'Transition created successfully',
        type: 'success',
      });

      return true;

    } catch (error) {
      console.error(error);
      console.log(error)
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        }); 
      } else if(error.response && error.response.status === 502) {
        const errorMessage = error.response.data.message;
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
    transitionType, setTransitionType,
    description, setDescription,
    newTransaction
  }
}

export default useCreateSavingTransition;