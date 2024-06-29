import React, { useState, useEffect } from 'react';
import './Savings_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Global_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import Add_Savings_Transition from '../../../../../Containers/Forms/Savings/Add_Savings_Transition/Add_Savings_Transition';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import Loading_Balls from '../../../../../Components/Loading/Loading_Balls/Loading_Balls';
import useFetchGetTotalPerCurrencyAndPlatform from '../../../../../Hooks/Saving_Transitions/useFetchGetTotalPerCurrencyAndPlatform';
import SavingsPieChart from './Containers/SavingsChart';

const Savings_Dashboard = () => {

  const { t } = useTranslation();

  const [selectSavingsForm, setSelectSavingsForm] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const delay = 1500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);

  const handleOpenForm = () => {
    setSelectSavingsForm(true);
  };

  const { totalSavingsAndPlatforms } = useFetchGetTotalPerCurrencyAndPlatform();

  useEffect(() => {
    if (totalSavingsAndPlatforms && totalSavingsAndPlatforms.length > 0) {
      // If there are currencies available, select the first currency
      setSelectedCurrency(totalSavingsAndPlatforms[0].currencies[0].code);
    }
  }, [totalSavingsAndPlatforms]);

    // Extract unique currency codes from the fetched data
    const currencies = totalSavingsAndPlatforms
    ? Array.from(new Set(totalSavingsAndPlatforms.flatMap(platform => platform.currencies.map(currency => currency.code))))
  : [];
  
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className='Savings_Dashboard'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      {selectSavingsForm && (
        <Add_Savings_Transition
          selectSavingsForm={selectSavingsForm}
          setSelectSavingsForm={setSelectSavingsForm}
        />
      )}

      <div className='Totals'>
        <div className='Total_On_Savings'>
          <div className="Header">
            <span>{t("Total on savings")}</span>
          </div>
          <div className="Body">
            <span>0000</span>
            <span>$</span>
          </div>
          <div className="Footer">
            <Link to="Savings_Transitions_History">{t("View history")}</Link>
          </div>
        </div>
        <div className='Savings_Pie_Chart'>
          <div className='Header'>
            {isLoading || totalSavingsAndPlatforms === null ? (
              <></>
            ) : totalSavingsAndPlatforms.length === 0 ? (
              <></>
            ) : (
              <>
                <span>{t('Distribution of')} {selectedCurrency} {t('by Platform')}</span>
                <select onChange={handleCurrencyChange} value={selectedCurrency}>
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
          {isLoading || totalSavingsAndPlatforms === null ? (
            <div className='Loading'>
              <Loading_Balls count={6}/>
            </div>
          ) : totalSavingsAndPlatforms.length === 0 ? (
            <div className='No_Transition'>
              <span>{t("No transitions")}</span>
            </div>
          ) : (
            <div className='Contente'>
              <SavingsPieChart data={totalSavingsAndPlatforms} selectedCurrency={selectedCurrency} />
            </div>
          )}
        </div>
      </div>
      <div className='Actions'>
        <div className="Button_Field">
          <Global_Button 
            Text={t("Create Transition")}
            onClick={handleOpenForm}
          />
        </div>
        <div className="Button_Field">
          <Global_Button 
            Text={t("Transfer")}
          />
        </div>
      </div>
    </div>
  )
};

export default Savings_Dashboard;