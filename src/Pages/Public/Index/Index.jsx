import React from 'react';
import './Index.scss';
import * as Image from '../../../Imports/images';
import { useTranslation } from 'react-i18next';

const Index = () => {

  const { t } = useTranslation();

  return (
    <div className='Index'>

      <div className='Mobile_Contaier'>
        <h1>Control Everthing</h1>
      </div>

      <div className='Assets_Section'>

        <div className='Assets Crypto'>
          <div className='Content Crypto_One'>
            <img src={Image.Bitcoin} alt="Bitcoin" />
          </div>
          <div className='Content Crypto_Two'>
            <img src={Image.Ethereum} alt="Ethereum" />
          </div>
          <div className='Content Crypto_Three'>
            <img src={Image.Link} alt="Link" />
          </div>
          <div className='Content Crypto_Four'>
            <img src={Image.Tether} alt="Tether" />
          </div>
          <div className='Content Crypto_Five'>
            <img src={Image.Dogecoin} alt="Dogecoin" />
          </div>
          <div className='Content Crypto_Six'>
            <img src={Image.Matic} alt="Matic" />
          </div>
          <div className='Content Crypto_Seven'>
            <img src={Image.Solana} alt="Solana" />
          </div>
          <div className='Content Crypto_Eight'>
            <img src={Image.BNB} alt="BNB" />
          </div>
        </div>

        <div className='Assets Currency'>
          <div className='Content Currency_One'>
            <div>
              <span>EUR</span>
            </div>
          </div>
          <div className='Content Currency_Two'>
            <div>
              <span>USD</span>
            </div>
          </div>
          <div className='Content Currency_Three'>
            <div>
              <span>BRL</span>
            </div>
          </div>
          <div className='Content Currency_Four'>
            <div>
              <span>JPY</span>
            </div>
          </div>
          <div className='Content Currency_Five'>
            <div>
              <span>CHF</span>
            </div>
          </div>
          <div className='Content Currency_Six'>
            <div>
              <span>YUAN</span>
            </div>
          </div>
          <div className='Content Currency_Seven'>
            <div>
              <span>GBP</span>
            </div>
          </div>
          <div className='Content Currency_Eight'>
            <div>
              <span>RUB</span>
            </div>
          </div>
        </div>

        <div className="Container">
          <ul>
            <li>{t('Control everything')}</li>
            <li>{t('Freedom')}</li>
            <li>{t('Crypto Currency')}</li>
            <li>{t('Savings')}</li>
            <li>{t('Future')}</li>
            <li>{t('Present')}</li>
            <li>{t('Patrimony')}</li>
            <li>{t('Value')}</li>
          </ul>
        </div>

      </div>

    </div>
  )
};

export default Index;
