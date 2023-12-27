import React from 'react';
import './Styles/Global.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import * as Private_Page from './Imports/private.pages';
import Authentication_Check from './Authentication/Authentication_Check';

function App() {

  return (
    <main>
      <Routes>
        <Route index element={ <Public_Page.Index /> } />
        <Route path='Login' element={ <Public_Page.Login /> } />
        <Route 
            path="/CE_Work_Space/*" 
            element={
              <Authentication_Check>
                <Private_Page.CE_Work_Space />
              </Authentication_Check>            
            } 
          />
      </Routes>
    </main>
  )
}

export default App;
