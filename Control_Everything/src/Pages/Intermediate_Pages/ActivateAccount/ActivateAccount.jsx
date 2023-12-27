import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ActivateAccount.scss';
import axios from 'axios';

const ActivateAccount = () => {

  const navigate = useNavigate();

  const { token } = useParams();
  const decodedToken = atob(token);

  useEffect(() => {

    console.log('Entrou')
   
    axios.get(`http://192.168.1.18:3000/auth/activate/${decodedToken}`)
      .then(response => {
       
        setTimeout(() => {
          navigate('/Auth'); 
        }, 2000);

      })
      .catch(error => {
        
        console.error('Erro ao ativar a conta', error);
      });

  }, [token]);

  return (
    <section className='ActivateAccount'>

      <section className='Section_N1'>
        <h1>Activating account...</h1>
      </section>

    </section>
  );
}

export default ActivateAccount;