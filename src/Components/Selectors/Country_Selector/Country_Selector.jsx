import React, { useState, useEffect, useRef  } from 'react';
import http from "../../../Services/httpService";
import './Country_Selector.scss';
import { BASE_URL } from '../../../config/urls';
import { useTranslation } from 'react-i18next';

const Country_Selector = ({ country, setCountry }) => { 



  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const [countries, setCountries] = useState([]);
  const [inputActive, setInputActive] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await http.get(`${BASE_URL}/countries/get-coutries-from-database`);
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
      getCountryName(country).toLowerCase().includes(inputValue.toLowerCase())
    );
  
    setFilteredCountries(filtered);
  };

  const countryNamesEn = countries.map(country => country.countryNameEn);
  const countryNamesPt = countries.map(country => country.countryNamePt);

  const getCountryName = (country) => {
    const currentLanguage = i18n.language;
    return country[`countryName${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
  };

  return (
    <div className={`Coutrie_Selector ${inputActive ? 'open' : ''}`}>
      <div className='Countrie_Selector_Label'>
        <span>{t('Country')}</span>
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
              <li key={index} onClick={() => handleCountryClick(country.countryNameEn)}>
                <img src={country.CoutryFlag} alt='' /> <span>-</span>{' '}
                <span className='Country_Name'>{getCountryName(country)}</span>
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