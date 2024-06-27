import { useState, useEffect } from 'react';
import http from '../../Services/httpService';


const useFetchCurrenciesFromDataBase = () => { 

  const [ currenciesList, setCurrenciesList ] = useState(null)

  useEffect(() => {

    const fetchCurrenciesFromDataBase = async () => {
      try {

        const response = await http.get(`currency/get-all-currencies`);

        setCurrenciesList(response.data.currencies);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrenciesFromDataBase();
  }, []); 

  return { currenciesList };

}

export default useFetchCurrenciesFromDataBase;