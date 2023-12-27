import { useState, useEffect } from 'react'
import useFetchCurrencyFromDataBase from './useFetchCurrencyFromDataBase';
import useFetchCurrencyFromAPI from './useFetchCurrencyFromAPI';

const useCompareCurrencies = () => {

  const { currenciesDataBase, totalCurrenciesDataBase } = useFetchCurrencyFromDataBase();
  const { currenciesAPI, totalCurrenciesAPI } = useFetchCurrencyFromAPI();

  const [errorLength, setErrorLength] = useState();
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    let timeoutId = null;

    setIsLoading(true);

    if (currenciesAPI && currenciesDataBase) {
      timeoutId = setTimeout(()=>{
        setIsLoading(false);

        let warnings = [];

        if(totalCurrenciesAPI !== totalCurrenciesDataBase){
          setErrorLength(true);
          warnings.push(`Error: The total number of currencies is different! API has ${totalCurrenciesAPI}, DataBase has ${totalCurrenciesDataBase}`);
        }
      })
    }

  }, [currenciesDataBase, totalCurrenciesDataBase, currenciesAPI, totalCurrenciesAPI])

  return {
    errorLength,
    isLoading
  }
};


export default useCompareCurrencies;