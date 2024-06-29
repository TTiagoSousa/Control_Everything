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
          <Route path='Savings_Transitions_History' element={ <Private_Page.Savings_Transitions_History /> } />
        </Route>
        <Route path='Academy'> 
          <Route index element={ <Private_Page.Academy /> } />
        </Route>
        <Route path='Settings'> 
          <Route index element={ <Private_Page.Settings /> } />
        </Route>
      </Routes>
    </>
  )
};

export default Private_Routes;