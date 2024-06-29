import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchGetTotalPerCurrencyAndPlatform = () => {
 
  const [ totalSavingsAndPlatforms, setTotalSavingsAndPlatforms ] = useState(null);
  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchGetTotalPerCurrencyAndPlatform = async () => {
      try {

        const response = await http.get(`saving-transitions/${userId}/get-total-per-currency-and-platform`);

        setTotalSavingsAndPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGetTotalPerCurrencyAndPlatform();
  }, [userId, authenticated]); 

  return { totalSavingsAndPlatforms };
}

export default useFetchGetTotalPerCurrencyAndPlatform;