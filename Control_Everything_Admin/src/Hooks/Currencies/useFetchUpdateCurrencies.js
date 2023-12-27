import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';

const useFetchUpdateCurrencies = () => {

  const [update, setUpdate] = useState(false);

  const UpdadeCurrenciesApi = async () =>{
    
    try {

      setUpdate(true);

      const response = await axios.post(`${BASE_URL}/currency/fetch-data`);
    
      setUpdate(false);

    } catch (error) {
      console.log(error);
    }

  }

  return {UpdadeCurrenciesApi, update};
}


export default useFetchUpdateCurrencies;