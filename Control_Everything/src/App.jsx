import React from 'react';
import './Styles/Global.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import * as Container from './Imports/containers';
import * as Intermediate_Pages from './Imports/intermediate.pages';
import * as Private_Page from './Imports/private.pages';
import Authentication_Check from './Authentication/Authentication_Check';

function App() {

  const location = useLocation();

  const Containers_Location = location.pathname === '/';

  return (
    <main>

      {Containers_Location && (
        <> 
          <Container.Custumize_Sidebar />
        </>
      )}

      <Routes>
        <Route index element={ <Public_Page.Index /> } />
        <Route path='Auth' element={ <Public_Page.Auth /> } />
        <Route path="activate/:token" element={ <Intermediate_Pages.ActivateAccount /> } />
        <Route path='Recover_Password/:token' element={ <Public_Page.Recover_Password/> } />
        <Route 
          path="/CE/*" 
          element={ 
            <Authentication_Check>
              <Private_Page.CE /> 
            </Authentication_Check>
          } 
        />
      </Routes>
    </main>
  )
}

export default App;