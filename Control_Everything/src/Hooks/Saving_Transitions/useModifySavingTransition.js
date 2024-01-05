import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import useFetchTotalTransitions from "./useFetchTotalTransitions";
import http from "../../Services/httpService";
import { DataBaseState } from "../../Contexts/DataBase_Context";

const useModifySavingTransition = () => {

  const { setAlert } = NavsState();
  const { userId } = DataBaseState();

  const [ date, setDate ] = useState('');
  const [ hour, setHour]  = useState('');
  const [ amount, setAmount ] = useState('');
  const [ platform, setPlatform ] = useState('');
  const [ currencyType, setCurrencyType ] = useState();
  const [ transitiontype, setTransitiontype ] = useState('Deposit');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModifyTransition = async (transitionId) => {
    setIsSubmitting(true);

    if (!date || !hour || !amount || !platform || !transitiontype) {
      setAlert({
        open: true,
        message: "All fields must be filled",
        type: 'error'
      });

      return;
    }

    const updatedTransitionData = {
      currencyType,
      transitiontype,
      date,
      hour,
      amount,
      platform,
    };

    try {
      const response = await http.patch(`/saving-transitions/${userId}/${selectedTransition.id}`, updatedTransitionData,)
      setAlert({
        open: true,
        message: "Transition Updated Successfully",
        type: 'success'
      });

      console.log(response);
      // Handle any additional state updates or side effects here
    } catch (error) {
      setAlert({
        open: true,
        message: error.response ? error.response.data.message : "An error occurred",
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    transitiontype, setTransitiontype,
    handleModifyTransition,
    isSubmitting,
  };
}

export default useModifySavingTransition;