import React, { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import './Currency_Selector.scss';
import { BASE_URL } from '../../../config/urls';

const Currency_Selector = ({ currency, setCurrency }) => {

  const [currencies, setCurrencies] = useState([]);
  const [inputActive, setInputActive] = useState(false);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const inputRef = useRef(null);

  // Function to fetch API countries
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/currency/get-all-currencies`);
        const currenciesData = response.data.currencies; // Renamed to avoid variable name conflict
        setCurrencies(currenciesData);
        setFilteredCurrencies(currenciesData);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleCountryClick = (currencyCode) => {
    setCurrency(currencyCode); // Changed to setCurrency instead of setCurrencies
    setInputActive(false);
  };

  const handleInputClick = () => {
    setInputActive(true);
  };

  const handleInputFocus = () => {
    handleInputClick();
    inputRef.current.click();
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      setInputActive(true);
    }
  };

  // const handleChange = (event) => {
  //   const inputValue = event.target.value;
  //   setCountry(inputValue);

  //   const filtered = countries.filter((currency) =>
  //   currency.name.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  //   setFilteredCurrencies(filtered);
  // };

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setCurrency(inputValue);
  
    const filtered = currencies.filter((currency) =>
      (currency.code && currency.code.toLowerCase().includes(inputValue)) ||
      (currency.name && currency.name.toLowerCase().includes(inputValue))
    );
    setFilteredCurrencies(filtered);
  };


  return (
    <div className='Currency_Selector'>
      <div className='Currency_Selector_Label'>
        <span>Countrie</span>
      </div>
      <input
        type='text'
        className='Currency_Selector'
        value={currency}
        placeholder='Select currency'
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <div className='Currency_Selector_List_Wrapper'>
      {inputActive && (
        <ul className='Currency_Selector_List'>
          {filteredCurrencies.length > 0 ? (
            filteredCurrencies.map((currency, index) => (
              <li key={index} onClick={() => handleCountryClick(currency.code)}>
                <div className='Currency_Name'>
                  <span>{currency.code}</span>
                  <span>-</span>
                  <span>{currency.name}</span>
                </div>
                <div className='Currency_Symbols'>
                  <span>{currency.symbol}</span>
                </div>
              </li>
            ))
          ) : (
            <li className='NotFound'>
              <span>Currency Not Found</span>
            </li>
          )}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Currency_Selector;