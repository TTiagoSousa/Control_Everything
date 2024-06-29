import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchTotalNumberOfSavingsTransitions = () => {
 
  const [ totalTransitions, setTotalTransitions ] = useState(null);
  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {

        const response = await http.get(`saving-transitions/${userId}/get-total-number-of-savings-transitions`);

        setTotalTransitions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); 

  return { totalTransitions, setTotalTransitions };
}

export default useFetchTotalNumberOfSavingsTransitions;