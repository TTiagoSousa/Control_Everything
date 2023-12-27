import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';

const useFetchUpdateCoutries = () => {

  const [update, setUpdate] = useState(false);

  const UpdadeCountriesApi = async () =>{
    
    try {

      setUpdate(true);

      const response = await axios.post(`${BASE_URL}/countries/fetch-data`);
    
      setUpdate(false);

    } catch (error) {
      console.log(error);
    }

  }

  return {UpdadeCountriesApi, update};
}


export default useFetchUpdateCoutries;