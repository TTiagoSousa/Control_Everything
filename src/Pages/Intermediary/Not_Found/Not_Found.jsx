import React from 'react';
import './Not_Found.scss';
import { useTranslation } from 'react-i18next';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';

const Not_Found = () => {

  const { t } = useTranslation();

  return (
    <div className='Not_Found'>
      <h1>404</h1>
      <h1>{t('Page not found')}</h1>
      <div>
        <Global_Button 
          Text={t('Back to main page')}
          to='/'
        />
      </div>
    </div>
  )
};

export default Not_Found;