import React, { useState, useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';
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
  }, []); // Adicione authenticated como uma dependência

  if (isLoading) {
    return <Intermediate_Pages.Loading_Page />;
  }

  return authenticated ? (
    children
  ) : (
    navigate('/Login')
  );
};

export default Authentication_Check;

