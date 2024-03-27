import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchTotalTransitions = () => {
 
  const [ totalTransitions, setTotalTransitions ] = useState(null);
  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {

        const response = await http.get(`/savings-transitions/${userId}/total-of-saving-transitions`);

        setTotalTransitions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); 

  return { totalTransitions, setTotalTransitions };
}

export default useFetchTotalTransitions;