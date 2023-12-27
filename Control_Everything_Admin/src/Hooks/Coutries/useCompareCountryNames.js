import { useState, useEffect } from 'react';
import useFetchCoutryFromApi from './useFetchCoutryFromApi';
import useFetchCountryFromDataBase from './useFetchCoutryFromDataBase';

const useCompareCountryNames = () => {
  // Fetch country data from both API and database
  const { countriesApi, totalCountriesApi } = useFetchCoutryFromApi();
  const { countriesDataBase, totalCountriesDataBase } = useFetchCountryFromDataBase();

  const [mismatchWarning, setMismatchWarning] = useState([]);
  const [errorLength, setErrorLength] = useState();
  const [errorName, setErrorName] = useState();
  const [errorFlag, setErrorFlag] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    setIsLoading(true); // Start loading

    if (countriesApi && countriesDataBase) {
      timeoutId = setTimeout(() => {
        setIsLoading(false); // Stop loading

        let warnings = [];

        if (totalCountriesApi !== totalCountriesDataBase) {
          setErrorLength(true);
          warnings.push(`Error: The total number of countries is different! API has ${totalCountriesApi}, DataBase has ${totalCountriesDataBase}`);
        } else {
          const apiCountries = countriesApi.map(country => ({ name: country.name, flag: country.flag }));
          const dataBaseCountries = countriesDataBase.map(country => ({ name: country.countryName, flag: country.CoutryFlag }));

          const nameMismatches = apiCountries
            .filter(apiCountry => !dataBaseCountries.some(dbCountry => dbCountry.name === apiCountry.name))
            .concat(dataBaseCountries.filter(dbCountry => !apiCountries.some(apiCountry => apiCountry.name === dbCountry.name)))
            .map(country => country.name);

          const flagMismatches = apiCountries
            .filter(apiCountry => dataBaseCountries.some(dbCountry => dbCountry.name === apiCountry.name && dbCountry.flag !== apiCountry.flag))
            .map(country => country.name);

          if (nameMismatches.length > 0) {
            warnings.push(`Name Mismatch: ${nameMismatches.join(', ')}`);
            setErrorName(true);
          }
          
          if (flagMismatches.length > 0) {
            warnings.push(`Flag Mismatch: ${flagMismatches.join(', ')} (incorrect flag)`);
            setErrorFlag(true);
          }
        }

        setMismatchWarning(warnings);
      }, 500); // 500 milliseconds delay

      setErrorFlag(false)
      setErrorName(false)
      setErrorLength(false)
    }

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, [countriesApi, countriesDataBase, totalCountriesApi, totalCountriesDataBase]);
  return { mismatchWarning, errorLength, errorName, errorFlag, isLoading };
};


export default useCompareCountryNames;