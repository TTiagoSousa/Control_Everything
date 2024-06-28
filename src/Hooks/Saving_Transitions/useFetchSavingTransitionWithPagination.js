import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchSavingsTransitions = () => {
 
  const [ savingTransitionsList, setSavingTransitionsList ] = useState(null);
  const [ perPage, setPerPage] = useState(10);
  const [ page, setPage ] = useState(1);
  const { authenticated, userId } = DataBaseState();
  
  useEffect(() => {
    if (!authenticated) return;

    const fetchTotalTransitions = async () => {
      try {

        const response = await http.get(`saving-transitions/${userId}/get-savings-transactions?perPage=${perPage}&page=${page}`);

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
    page, setPage,
  };
}

export default useFetchSavingsTransitions;