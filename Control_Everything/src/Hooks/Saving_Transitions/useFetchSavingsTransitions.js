import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';
import DataBaseContext, { DataBaseState } from '../../Contexts/DataBase_Context';

const useFetchSavingsTransitions = () => {
 
  const [ savingTransitionsList, setSavingTransitionsList ] = useState(null);
  const [ perPage, setPerPage] = useState(10);
  const [ page, setPage ] = useState(1);
  const { authenticated, userId } = DataBaseState();
  
  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`
          ${BASE_URL}/saving-transitions/${userId}/get-savings-transitions?perPage=${perPage}&page=${page}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });

        setSavingTransitionsList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, [authenticated, userId, page, perPage]); // Dependências do efeito

  return {
    savingTransitionsList, setSavingTransitionsList,
    perPage, setPerPage,
    page, setPage
  };
}

export default useFetchSavingsTransitions;