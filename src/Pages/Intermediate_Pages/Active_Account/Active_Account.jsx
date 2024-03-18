import React from 'react';
import './Active_Account.scss';
import http from "../../../Services/httpService";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Active_Account = () => {

  const navigate = useNavigate();

  const { token } = useParams();
  const decodedToken = atob(token);

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await http.get(`/auth/activate_user/${decodedToken}`);
        console.log(response); // Log the response to see what you're getting
        setTimeout(() => {
          navigate('/Auth');
        }, 3000);
      } catch (error) {
        console.error('Error activating the account', error);
      }
    };

    activateAccount();
    
  }, [decodedToken, navigate]);

  return (
    <div className='Active_Account'>
      <h1>Activating the account</h1>
      <div className='Sub_Tittle'>
        <h2>Please wait</h2>
        <div className='Animation'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  )
}

export default Active_Account;