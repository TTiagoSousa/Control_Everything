import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCoutries } from '../../Imports/apis';

const useFetchCountryFromDataBase = () => {

  const [countriesDataBase, setCountriesDataBase] = useState([]);
  const [totalCountriesDataBase, setTotalCountriesDataBase] = useState(null);

  useEffect(() => {
    const fetchCountryApi = async () => {
      try {
        const response = await axios.get(getCoutries());

        setCountriesDataBase(response.data);
        setTotalCountriesDataBase(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryApi();
  }, []);

  return {countriesDataBase, totalCountriesDataBase};
}


export default useFetchCountryFromDataBase;
