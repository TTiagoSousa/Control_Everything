import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';
import { getCurrencies } from '../../Imports/apis';

const useFetchCurrencyFromDataBase = () => {

  const [currenciesDataBase, setCurrenciesDataBase] = useState([]);
  const [totalCurrenciesDataBase, setTotalCurrenciesDataBase] = useState('');

  useEffect(() => {
    const fetchCountryApi = async () => {
      try {
        const response = await axios.get(getCurrencies());
        setCurrenciesDataBase(response.data.currencies);
        setTotalCurrenciesDataBase(response.data.currencies.length);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchCountryApi();
  }, []);

  return {currenciesDataBase, totalCurrenciesDataBase};
}


export default useFetchCurrencyFromDataBase;