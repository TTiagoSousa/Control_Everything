import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import { GlobalState } from '../../Contexts/Global_Context';
import http from '../../Services/httpService';

const useFetchTotalByCurrencyType = () => {
 
  const [ totalOnByTypeSavingTransition, setTotalOnByTypeSavingTransition ] = useState(null);
  const [ totalonSavingTransition, setTotalonSavingTransition ] = useState(null);
  const [ baseSymbol, setBaseSymbol ] = useState(null);
  const { selectCurrency } = GlobalState();

  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {

        const response = await http.get(`/saving-transitions/${userId}/get-total-by-currency-type/${selectCurrency}`);

        const { result, totalConvertedAmount, baseCurrencySymbol } = response.data;

        setTotalOnByTypeSavingTransition(result);
        setTotalonSavingTransition(totalConvertedAmount);
        setBaseSymbol(baseCurrencySymbol);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); // Dependências do efeito

  return {totalOnByTypeSavingTransition, totalonSavingTransition, baseSymbol};
}

export default useFetchTotalByCurrencyType; 