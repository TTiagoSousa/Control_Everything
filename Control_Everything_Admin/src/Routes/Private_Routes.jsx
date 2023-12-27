import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Private_Page from '../Imports/private.pages';

const Private_Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={ <Private_Page.Home /> }/>
        <Route path='Home' element={ <Private_Page.Home /> }/>
        <Route path='Apis_Dashboard'> 
          <Route index element={ <Private_Page.Apis_Dashboard /> } />
          <Route path='Country_Api_Dashboard' element={ <Private_Page.Country_Api_Dashboard /> } />
          <Route path='Currency_Api_Dashboard' element={ <Private_Page.Currency_Api_Dashboard /> } />
        </Route>
        <Route path='Decumentations' element={ <Private_Page.Decumentations /> }/>
      </Routes>
    </>
  )
};

export default Private_Routes;