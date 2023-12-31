import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import { GlobalState } from '../../Contexts/Global_Context';

const useFetchTotalByCurrencyType = () => {
 
  const [ totalOnByTypeSavingTransition, setTotalOnByTypeSavingTransition ] = useState(null);
  const [ totalonSavingTransition, setTotalonSavingTransition ] = useState(null);
  const { selectCurrency } = GlobalState();

  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/saving-transitions/${userId}/get-total-by-currency-type/${selectCurrency}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { result, totalConvertedAmount } = response.data;

        setTotalOnByTypeSavingTransition(result);
        setTotalonSavingTransition(totalConvertedAmount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); // Dependências do efeito

  return {totalOnByTypeSavingTransition, totalonSavingTransition};
}

export default useFetchTotalByCurrencyType; 