import React, { useEffect, useState } from 'react';
import './Add_Savings_Transition.scss';
import Dark_Div from '../../../../Components/Dark_Div/Dark_Div';
import useFetchCurrenciesFromDataBase from '../../../../Hooks/Currency/useFetchCurrenciesFromDataBase';
import { useTranslation } from 'react-i18next';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Ghost from '../../../../Components/Not_Found/Ghost/Ghost';
import useCreateSavingTransition from '../../../../Hooks/Saving_Transitions/useCreateSavingTransition';
import useFetchPlatformsFromDataBase from '../../../../Hooks/Platforms/useFetchPlatformsFromDataBase';
import Global_Input_Forms from '../../../../Components/Inputs/Global_Input_Forms/Global_Input_Forms';
import Text_Box from '../../../../Components/Inputs/Text_Box/Text_Box';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';

const Add_Savings_Transition = ({ selectSavingsForm, setSelectSavingsForm }) => {

  const { t } = useTranslation();

  const {
    createSavingTransaction,    
    date, setDate,
    amount, setAmount,
    platformID, setPlatformID,
    currencyTypeID, setCurrencyTypeID,
    transitionType, setTransitionType,
    description, setDescription,
  } = useCreateSavingTransition();

  const [step, setStep] = useState(1);

  // Currency
    const { currenciesList } = useFetchCurrenciesFromDataBase();
    const [ currencyCode, setCurrencyCode ] = useState('');
    const [ filteredCurrencies, setFilteredCurrencies ] = useState([]);

    useEffect(() => {
      if (currenciesList && currenciesList) {
        setFilteredCurrencies(currenciesList);
      }
    }, [currenciesList]);

    const handleCurrencyChange = (event) => {
      const inputValue = event.target.value.toLowerCase();
      const filtered = currenciesList.filter((currency) =>
        (currency.short_code && currency.short_code.toLowerCase().includes(inputValue)) ||
        (currency.name && currency.name.toLowerCase().includes(inputValue))
      );
      setFilteredCurrencies(filtered);
    };

    const handleSelectCurrency = (currency) => {
      setCurrencyTypeID(currency.id);
      setCurrencyCode(currency.short_code)
      setStep(2);
    };
  // Currency

  // Platform
    const { platformsList } = useFetchPlatformsFromDataBase();
    const [ platformSearch, setPlatformSearch ] = useState('');
    const [ platformName, setPlatformName ] = useState('')
    const [ platformImage, setPlatformImage ] = useState('')
    const [ filteredPlatforms, setFilteredPlatforms ] = useState([]);

    useEffect(() => {
      if (platformsList && platformsList.platforms) {
        setFilteredPlatforms(platformsList.platforms);
      }
    }, [platformsList]);

    const handlePlatformChange = (event) => {
      const inputValue = event.target.value.toLowerCase();
      setPlatformSearch(inputValue);
      const filtered = platformsList.platforms.filter((platform) =>
        (platform.name && platform.name.toLowerCase().includes(inputValue))
      );
      setFilteredPlatforms(filtered);
    };

    const handleSelectPlatform = (platform) => {
      setPlatformID(platform.id);
      setPlatformName(platform.name);
      setPlatformImage(platform.image)
      setStep(3);
    };
  // Platform

  const handleTransactionTypeChange = (type, e) => {
    e.preventDefault(); // Prevent the default form submission
    setTransitionType(type);
  };

  const nextStep = () => {
    setStep(prevStep => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  useEffect(() => {
    if (!selectSavingsForm) {
      // Reset form when closing
      setStep(1);
      // Reset other form fields as needed
      setDate('');
      setAmount('');
      setPlatformID('');
      setCurrencyTypeID('');
      setTransitionType('');
      setDescription('');
    }
  }, [selectSavingsForm]);

  console.log(currenciesList)

  return (
    <>
      <Dark_Div
        toggled={setSelectSavingsForm}
        toggle={selectSavingsForm}
      />

      <div className={`Add_Savings_Transition ${selectSavingsForm ? 'active' : ''}`}>
        {step === 1 && (
          <div className='Currency'>
            <div className='Title'>
              <span>{t('Select currency')}</span>
            </div>
            <div className='Input_Field'>
              <Global_Input 
                Text={t("Search")}
                onChange={handleCurrencyChange}
              />
            </div>
            <div className='Search_Result'>
              {filteredCurrencies.length > 0 ? (
                <ul>
                  {filteredCurrencies.map((currency, index) => (
                    <li key={index} onClick={() => handleSelectCurrency(currency)}>
                      <div className='Currency_Name'>
                        <span>{currency.short_code}</span>
                        <span>-</span>
                        <span>{currency.name}</span>
                      </div>
                      <div className='Currency_Symbols'>
                        <span>{currency.symbol}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className='Not_Found'>
                  <div>
                    <Ghost Text={t('Currency not found')}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='Platforms'>
            <div className='Title'>
              <span>{t('Select platform')}</span>
            </div>
            <div className='Input_Field'>
              <Global_Input 
                Text={t("Search")}
                onChange={handlePlatformChange}
              />
            </div>
            <div className='Search_Result'>
              {filteredPlatforms.length > 0 ? (
                <ul>
                  {filteredPlatforms.map((platform, index) => (
                    <li key={index} onClick={() => handleSelectPlatform(platform)}>
                      <div className='Platform_Name'>
                        <span>{platform.name}</span>
                      </div>
                      <div className='Platform_Img'>
                        <img src={platform.image} alt={platform.name} />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className='Not_Found'>
                  <div>
                    <Ghost Text={t('Platform not found')}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className='Form'>
              <div className='Field_Transition_Type'>
              <button
                className={transitionType === 'DEPOSIT' ? 'active' : ''}
                onClick={(e) => handleTransactionTypeChange('DEPOSIT', e)}
                value="DEPOSIT"
              >
                {t('Deposit')}
              </button>
              <button
                className={transitionType === 'WITHDRAWAL' ? 'active' : ''}
                onClick={(e) => handleTransactionTypeChange('WITHDRAWAL', e)}
                value="WITHDRAWAL"
              >
                {t('Withdraw')}
              </button>
            </div>
            <div className='Input_Field'>
              <Global_Input_Forms 
                Text={t("Currency")}
                selectValue={currencyCode}
                onclick={() => setStep(1)}
              />
            </div>
            <div className='Input_Field'>
              <Global_Input_Forms 
                Text={t("Platform")}
                selectValue={platformName}
                image={platformImage}
                onclick={() => setStep(2)}
              />
            </div>
            <div className='Input_Field'>
              <Global_Input 
                Text={t("Amount")}
                Type="number"
                Value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className='Input_Field'>
              <Global_Input 
                Text={t("Date")}
                Type="datetime-local"
                Value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className='TextBox_Field'>
              <Text_Box 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder={description ? '' : t('Observation')}
                maxlength="100"
              />
            </div>
            <div className='Button_Field'>
              <Global_Button 
                Text={t("Create transition")}
                onClick={createSavingTransaction}
              />
            </div>
          </div>
        )}
        <div className='Navigation_Buttons'>
          {step > 1 && <Global_Button onClick={prevStep} Text={t("Back")}/>}
          {step < 3 && <Global_Button onClick={nextStep} Text={t("Next")}/>}
        </div>
      </div>
    </>
  );
};

export default Add_Savings_Transition;