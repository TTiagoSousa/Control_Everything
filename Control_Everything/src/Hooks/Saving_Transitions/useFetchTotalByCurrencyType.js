import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import { GlobalState } from '../../Contexts/Global_Context';

const useFetchTotalByCurrencyType = () => {
 
  const [ totalonSavingTransition, setTotalonSavingTransition ] = useState(null);
  const { selectCurrency, setSelectCurrency } = GlobalState();
  console.log("selectCurrency  " + selectCurrency)

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

        setTotalonSavingTransition(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); // Dependências do efeito

  return {totalonSavingTransition, setTotalonSavingTransition};
}

export default useFetchTotalByCurrencyType; 