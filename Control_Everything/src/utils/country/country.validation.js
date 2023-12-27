import { BASE_URL } from '../../config/urls';
import axios from 'axios';

export const valideCountry = async (country) => {

  try {
    const response = await axios.get(`${BASE_URL}/countries/all`);
   
    const countriesData = response.data; 
    const requestedCountry = countriesData.find(c => c.countryName === country);

    if (requestedCountry) {
     
      return true;
    } else {
      
      return false;
    }

  } catch (error) {

    return false;
  }

}

