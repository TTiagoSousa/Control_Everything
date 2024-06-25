import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Private_Page from '../Imports/private.pages';

const Private_Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={ <Private_Page.Dashboard /> }/>
        <Route path='Dashboard' element={ <Private_Page.Dashboard /> }/>
        <Route path='Savings_Dashboard'> 
          <Route index element={ <Private_Page.Savings_Dashboard /> } />
        </Route>
      </Routes>
    </>
  )
};

export default Private_Routes;