import React, { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import './Country_Selector.scss';
import { getCoutries } from '../../../Imports/apis';

const Country_Selector = ({ country, setCountry }) => {

  const [countries, setCountries] = useState([]);
  const [inputActive, setInputActive] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const inputRef = useRef(null);

  // Function to fetch API countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(getCoutries());
        const countries = response.data;
        setCountries(countries);
        setFilteredCountries(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = (countryName) => {
    setCountry(countryName);
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

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setCountry(inputValue);
  
    const filtered = countries.filter((country) =>
      country.countryName && country.countryName.toLowerCase().includes(inputValue.toLowerCase())
    );
    
    setFilteredCountries(filtered);
  };

  return (
    <div className='Coutrie_Selector'>
      <div className='Countrie_Selector_Label'>
        <span>Countrie</span>
      </div>
      <input
        type='text'
        className='Coutrie_Selector'
        value={country}
        placeholder='Enter country name'
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <div className='Coutrie_Selector_List_Wrapper'>
      {inputActive && (
        <ul className='Coutrie_Selector_List'>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li key={index} onClick={() => handleCountryClick(country.countryName)}>
                <img src={country.CoutryFlag} alt='' /> <span>-</span>{' '}
                <span className='Coutrie_Name'>{country.countryName}</span>
              </li>
            ))
          ) : (
            <li className='NotFound'>
              <span>Country Not Found</span>
            </li>
          )}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Country_Selector;