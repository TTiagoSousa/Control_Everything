import { useEffect, useState } from 'react';
import { GlobalState } from '../../Contexts/Global_Context';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchGetTotalOnSavingsTransitionsConverted = () => {

  const { authenticated, userId } = DataBaseState();
  const { selectCurrency } = GlobalState();

  const [ totalOnSavings, setTotalOnSavings ] = useState(null)

  useEffect(() => {
    if (!authenticated) return;

    const fetchGetTotalPerCurrency = async () => {
      try {

        const response = await http.get(`saving-transitions/${userId}/get-total-on-savings-converted/${selectCurrency}`);

        setTotalOnSavings(response.data)

      } catch (error) {
        console.error(error);
      }
    };

    fetchGetTotalPerCurrency();
    
  }, [userId, authenticated, selectCurrency]); 

  return { totalOnSavings };
}

export default useFetchGetTotalOnSavingsTransitionsConverted; 