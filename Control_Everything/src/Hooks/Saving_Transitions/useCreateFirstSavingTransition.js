import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import axios from "axios";
import { BASE_URL } from "../../config/urls";
import useFetchTotalTransitions from "./useFetchTotalTransitions";

const useCreateFirstSavingTransition = () => {

  const { setAlert, alert } = NavsState();

  const [ date, setDate ] = useState('');
  const [ hour, setHour]  = useState('');
  const [ amount, setAmount ] = useState('');
  const [ platform, setPlatform ] = useState('');
  const [ currencyType, setCurrencyType ] = useState();
  const [ transitiontype, setTransitiontype ] = useState('Deposit');

  const {totalTransitions, setTotalTransitions} = useFetchTotalTransitions();

  const createFirstSavingTransaction = async () => {

    if (!date || !hour || !amount || !platform || !transitiontype) {
      setAlert({
        open: true,
        message: "All fields must be filled",
        type: 'error'
      });
    }

    const token = sessionStorage.getItem('token');

    try {
      const response = await axios.post(
        `${BASE_URL}/saving-transitions/Create`,
        {
          transitiontype: transitiontype,
          data: date,
          hour: hour,
          amount: amount,
          platform: platform,
          currencyType: currencyType,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setAlert({
        open: true,
        message: 'Transition created successfully',
        type: 'success',
      });

      setTotalTransitions(1);

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Invalid value for type of transaction') {
          const errorMessage = error.response.data.message;
          setAlert({
            open: true,
            message: errorMessage,
            type: 'error'
          });
        }
      }
    }

  }

  return {
    createFirstSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    transitiontype, setTransitiontype,
    totalTransitions
  }
}

export default useCreateFirstSavingTransition;