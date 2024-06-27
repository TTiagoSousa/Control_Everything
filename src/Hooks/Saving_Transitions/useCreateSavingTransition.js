import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { useTranslation } from 'react-i18next';
import { containsOnlyLettersNumbersAndHyphens } from "../../Utils/text/contains.only.letters.numbers.and.hyphens";

const useCreateSavingTransition = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const [ date, setDate ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ platformID, setPlatformID ] = useState('');
  const [ currencyTypeID, setCurrencyTypeID ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ transitionType, setTransitionType ] = useState('DEPOSIT');

  const createSavingTransaction = async () => {

    if (!date || !amount || !platformID || !transitionType || !date) {
      console.log("All fields must be filled")
      setAlert({
        open: true,
        message: t("All fields must be filled"),
        type: 'error'
      });

      return;
    }

    if (!containsOnlyLettersNumbersAndHyphens(platformID)) {
      setAlert({
        open: true,
        message: t("Invalid platform"),
        type: 'error'
      });
      return;
    }

    if (!containsOnlyLettersNumbersAndHyphens(currencyTypeID)) {
      setAlert({
        open: true,
        message: t("Invalid currency"),
        type: 'error'
      });
      return;
    }

    const formattedDate = new Date(date).toISOString();

    try {
      
      const response = await http.post('saving-transitions/create', {
        transitionType: transitionType,
        date: formattedDate,
        amount: parseInt(amount, 10),
        platformID: platformID,
        currencyTypeID: currencyTypeID,
        description: description
      });
 
      setAlert({
        open: true,
        message: 'Transition created successfully',
        type: 'success',
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 502) {
        let errorMessage = error.response.data.message;
        errorMessage = t(errorMessage);
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
    amount, setAmount,
    platformID, setPlatformID,
    currencyTypeID, setCurrencyTypeID,
    transitionType, setTransitionType,
    description, setDescription,
  }
}

export default useCreateSavingTransition;