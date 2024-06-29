import React from 'react';
import './Active_Account.scss';
import http from "../../../Services/httpService";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Active_Account = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { token } = useParams(); // Hook to get the token from the URL parameters
  const decodedToken = atob(token); // Decode the base64-encoded token

  useEffect(() => {
    const activateAccount = async () => {

      try {
        const response = await http.patch(`auth-user/activate-user/${decodedToken}`);

        // After a delay of 3 seconds, navigate to the 'Sign_In' page
        setTimeout(() => {
          navigate('/Sign_In');
        }, 3000);
      } catch (error) {
    
      }
    };

    // Call the function to activate the account
    activateAccount();
  }, [decodedToken, navigate]); // Dependencies for the useEffect hook
  
  return (
    <div className='Active_Account'> 
      <h1>{t('Activating the account')}</h1>
      <div className='Sub_Tittle'>
        <h2>{t('Please wait...')}</h2>
        <div className='Animation'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  )
};

export default Active_Account;
