import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataBaseState } from '../Contexts/DataBase_Context';
import * as Intermediate_Pages from '../Imports/intermediate.pages'

const Authentication_Check = ({ children }) => {

  const { authenticated } = DataBaseState();
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 700); 

    return () => clearTimeout(delay); 
  }, []);

  if (isLoading) {
    
    return <Intermediate_Pages.Loading_Page />;
  }

  return authenticated ? (
    children
  ) : (
    navigate('/')
  );
};

export default Authentication_Check;