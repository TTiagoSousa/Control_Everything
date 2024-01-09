import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import { GlobalState } from '../../Contexts/Global_Context';
import http from '../../Services/httpService';

const useFetchTotalConverted = () => {
 
  const [ totalonSavingTransitionConverted, setTotalonSavingTransitionConverted ] = useState(null);
  const [ baseSymbol, setBaseSymbol ] = useState(null);
  const { selectCurrency } = GlobalState();

  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {

        const response = await http.get(`/saving-transitions/${userId}/get-total-converted/${selectCurrency}`);

        const { totalConvertedAmount, targetCurrencySymbol } = response.data;

        setTotalonSavingTransitionConverted(totalConvertedAmount);
        setBaseSymbol(targetCurrencySymbol);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); 

  return { totalonSavingTransitionConverted, baseSymbol };
}

export default useFetchTotalConverted; 