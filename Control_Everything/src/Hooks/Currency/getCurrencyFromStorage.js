import { useState, useEffect, useContext } from 'react';

const getCurrencyFromStorage = () => {

  const [currency, setCurrency] = useState();

  useEffect(() => {
    try {
      const userSettings = sessionStorage.getItem('userSettings');
      if (userSettings) {
        const settings = JSON.parse(userSettings);
        // Set the currency value if it exists in the user settings
        if (settings.currency) {
          setCurrency(settings.currency);
        } else {
          // Handle the case where currency is not set in the user settings
          console.error('Currency not found in user settings.');
          // Optionally set a default currency value here
          setCurrency('USD'); 
        }
      } else {
        // Handle the case where user settings are not found in the session storage
        console.error('User settings not found in session storage.');
        // Optionally set a default currency value here
        setCurrency('Default Currency'); 
      }
    } catch (error) {
      console.error('Error fetching currency from session storage:', error);
      // Optionally set a default currency value here
      setCurrency('Default Currency'); 
    }
  }, []);

  return {currency};
}

export default getCurrencyFromStorage;