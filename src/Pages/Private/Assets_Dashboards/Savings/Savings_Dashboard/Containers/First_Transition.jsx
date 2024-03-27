import React from 'react';
import '../Savings_Dashboard.scss';
import Global_Input from '../../../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import Text_Box from '../../../../../../Components/Inputs/Text_Box/Text_Box';
import useCreateSavingTransition from '../../../../../../Hooks/Savings/useCreateSavingTransition';
import { useTranslation } from 'react-i18next';

const First_Transition = () => {

  const { t } = useTranslation();

  const { 
    createSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    description, setDescription,
  } = useCreateSavingTransition(null);
    
  async function handleSubmit(e) {
    e.preventDefault();
    
    const success = await createSavingTransaction();
    if (success) {
      window.location.reload();
    } 
  }  

  return (
    <div className='First_Transition'>
      <div className='Title'>
        <div className='First_Title'>
          <h1>{t("Savings dashboard")}</h1>
        </div>
        <h1>{t("Add your first transition")}</h1>
      </div>
      <div className='Form_Container'>
        <form>
          <div className='Text_Field'>
            <span>{t('Transition Type')}:</span>
            <span className='Type'>{t('Deposit')}</span>
          </div>
          <div className="Input_Field">
            <Global_Input 
              Text={t("Currency")}
              Type="texr"
              Value={currencyType}
              onChange={(e) => setCurrencyType(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input 
              Text={t("Data")}
              Type="date"
              Value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input
              Text={t("Hour")}
              Type="time"
              Value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input
              Text={t("Platform")}
              Type="text"
              Value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input 
              Text={t("Amount")}
              Type="number"
              Value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="Text_Box_Field">
            <Text_Box 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              placeholder={description ? '' : t('Observation')}
            />
          </div>
          <div className="Button_Field">
            <Global_Button 
              Text={t("Submit")}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <div className='Alert'>
        <Mui_Alert />
      </div>
    </div>
  )
}

export default First_Transition;
