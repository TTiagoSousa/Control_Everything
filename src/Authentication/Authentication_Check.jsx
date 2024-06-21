import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataBaseState } from '../Contexts/DataBase_Context';
import * as Intermediate_Pages from '../Imports/intermediary.pages'

const Authentication_Check = ({ children }) => {
  
  const { authenticated } = DataBaseState();
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!isLoading && !authenticated) {
      navigate('/');
    }
  }, [isLoading, authenticated, navigate]);

  if (isLoading) {
    return <Intermediate_Pages.Loading_Page />;
  }

  return authenticated ? children : null;
};

export default Authentication_Check;