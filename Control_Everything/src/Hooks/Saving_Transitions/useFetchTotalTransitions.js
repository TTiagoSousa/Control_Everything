import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';
import DataBaseContext, { DataBaseState } from '../../Contexts/DataBase_Context';

const useFetchTotalTransitions = () => {
 
  const [ totalTransitions, setTotalTransitions ] = useState(null);
  const { authenticated, userId } = DataBaseState();
  
  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/saving-transitions/${userId}/total`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTotalTransitions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [userId, authenticated]); // Dependências do efeito

  return {totalTransitions, setTotalTransitions};
}

export default useFetchTotalTransitions;