import React from 'react';
import './Header_Index.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header_Index = () => {

  const { t } = useTranslation();

  const authenticated = false

  return (

    <header className='Header_Index'>

      <div className='Left_Side'></div>

      <div className='Middle'>
        <h1>Control Everything</h1>
      </div>

      <div className='Rigth_Side'>
        <Link 
          to={authenticated ? 'CE/Dashboard' : '/Sign_In'}
        >
          {authenticated ? t('Back to dasboard') : t('Login or Register')}
        </Link>
      </div>
      
    </header>
  )
}

export default Header_Index;
