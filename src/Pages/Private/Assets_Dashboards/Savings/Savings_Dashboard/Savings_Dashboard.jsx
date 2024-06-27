import React, { useState } from 'react';
import './Savings_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Global_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import Add_Savings_Transition from '../../../../../Containers/Forms/Savings/Add_Savings_Transition/Add_Savings_Transition';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Savings_Dashboard = () => {

  const { t } = useTranslation();

  const [selectSavingsForm, setSelectSavingsForm] = useState(false);

  const handleOpenForm = () => {
    setSelectSavingsForm(true);
  };

  return (
    <div className='Savings_Dashboard'>

      <div className='Totals'>

        <div className='Alert'>
          <Mui_Alert />
        </div>

        {selectSavingsForm && (
          <Add_Savings_Transition
            selectSavingsForm={selectSavingsForm}
            setSelectSavingsForm={setSelectSavingsForm}
          />
        )}

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
        <div className='Savings_Pie_Chart'></div>
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