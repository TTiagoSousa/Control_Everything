import React, { useEffect, useState } from 'react';
import './Countries_Selector.scss';
import Dark_Div from '../../Dark_Div/Dark_Div';
import Global_Input from '../../Inputs/Global_Input/Global_Input';
import { useTranslation } from 'react-i18next';
import getCountriesFromDataBase from '../../../Hooks/Countries/getCountriesFromDataBase';
import Ghost from '../../Not_Found/Ghost/Ghost';

const Countries_Selector = ({ countryForm, setCountryForm, setCountry, setcountryName, setCountryImage }) => {

  const { t } = useTranslation();

  const { countriesList } = getCountriesFromDataBase();
  const [searchText, setSearchText] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
   
    if (!countriesList) return;
    
    const filtered = countriesList.filter(country =>
      country.countryName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchText, countriesList]);

  const handleCountryClick = (id, name, countryFlag) => {
    setCountry(id);
    setcountryName(name);
    setCountryImage(countryFlag); // Definir a imagem do país
    setCountryForm(false);
  };

  return (
    <>
      <Dark_Div toggled={setCountryForm} toggle={countryForm} />

      <div className={`Countries_Selector ${countryForm ? 'active' : ''}`}>
        <div className='Shearch_Country'>
          <div className='Shearch_Input'>
            <Global_Input Text={t('Search')} onChange={(e) => setSearchText(e.target.value)}/>
          </div>
        </div>
        <div className='Search_Result'>
          <ul>
            {filteredCountries.length === 0 ? (
              <div className='Not_Found'>
                <Ghost Text={t('Country not found')}/>
              </div>
            ) : (
              <ul>
                {filteredCountries.map(country => (
                  <li key={country.id} onClick={() => handleCountryClick(country.id, country.countryName, country.countryFlag)}>
                    <span>{country.countryName}</span>
                    <img src={country.countryFlag} alt={country.countryName} />
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Countries_Selector;