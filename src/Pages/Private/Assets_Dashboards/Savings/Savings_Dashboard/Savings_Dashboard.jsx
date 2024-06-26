import React from 'react';
import './Savings_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Global_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';

const Savings_Dashboard = () => {

  const { t } = useTranslation();

  return (
    <div className='Savings_Dashboard'>

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
        <div className='Savings_Pie_Chart'></div>
      </div>
      <div className='Actions'>
        <div className="Button_Field">
          <Global_Button 
            Text={t("Create Transition")}
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