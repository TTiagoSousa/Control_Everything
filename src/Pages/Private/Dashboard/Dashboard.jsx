import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {

  const { t } = useTranslation();

  return (

    <div className="Dashboard">
      <div className='Assets_Card'>
        <header>
          <span>{t("Type of Assets")}</span>
        </header>
        <body>
          <ul>
            <li>
              <Link className='Title' to="/CE/Savings_Dashboard">{t("Savings Account")}</Link> 
              <div>
                <span>XXXXX</span>
                <span>X</span>
              </div>
            </li>
            <li>
              <Link className='Title' to="/CE/Crypto_Dashboard">{t("Crypto")}</Link> 
              <div>
                <span>XXXXXX</span>
                <span>X</span>
              </div>
            </li>
          </ul>
        </body>
        <footer>
          <span>{t("Choose the asset")}</span>
        </footer>
      </div>
    </div>

  )
};

export default Dashboard;