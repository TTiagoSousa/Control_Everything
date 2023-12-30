import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Private_Page from '../Imports/private.pages';

const Private_Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={ <Private_Page.Dashboard /> }/>
        <Route path='Dashboard' element={ <Private_Page.Dashboard /> }/>
        <Route path='Savings'> 
          <Route index element={ <Private_Page.Savings_Dashboard /> } />
          <Route path='Savings_History' element={ <Private_Page.Savings_History /> } />
        </Route>
        <Route path='Settings'>
          <Route path='Settings_Dashboard' element={ <Private_Page.Settings_Dashboard /> }/>
        </Route>
        <Route path='Academy'>
          <Route index element={ <Private_Page.Academy_Dashboard /> }/>
        </Route>
      </Routes>
    </>
  )
};

export default Private_Routes;