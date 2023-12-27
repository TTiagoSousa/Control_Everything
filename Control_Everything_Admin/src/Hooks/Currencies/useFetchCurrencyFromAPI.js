import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';

const useFetchCurrencyFromAPI = () => {

  const [currenciesAPI, setCurrenciesAPI] = useState([]);
  const [totalCurrenciesAPI, setTotalCurrenciesAPI] = useState('');

  useEffect(() => {
    const fetchCountryApi = async () => {
      try {

        const currencyRateUrl  = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_vzyu6fJj9v9Uu3g1IpCpik3ukIOQE1SY0HNrUShK&base_currency=USD`;
        const responseCurrencyRate = await axios.get(currencyRateUrl);
        const currencyRates = responseCurrencyRate.data.data;
        
        const currencyNameUrl  = `https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_vzyu6fJj9v9Uu3g1IpCpik3ukIOQE1SY0HNrUShK&currencies=`;
        const responseCurrencyName = await axios.get(currencyNameUrl);
        const currencies = responseCurrencyName.data.data;

        const simplifiedCurrencies = Object.keys(currencyRates).map((key) => {
          return {
            name: key,
            rate: currencyRates[key],
            symbol: currencies[key].symbol,
          };
        });

        setCurrenciesAPI(simplifiedCurrencies);

      } catch (error) {
        console.error(error);
      } 
    };

    fetchCountryApi();
  }, []);

  return {currenciesAPI, totalCurrenciesAPI};
}


export default useFetchCurrencyFromAPI;