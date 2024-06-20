import { useState, useEffect } from 'react';
import http from '../../Services/httpService';

const getCountriesFromDataBase = () => {
 
  const [ countriesList, setCountriesList ] = useState(null);

  const [ language ] = useState(localStorage.getItem('language') || 'en');
  
  useEffect(() => {

    const fetchTotalTransitions = async () => {
      try {

        const response = await http.get(`countries/get-coutries-from-database-based-on-language/${language}`);

        setCountriesList(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTransitions();
  }, []); 

  return { countriesList };
}

export default getCountriesFromDataBase;