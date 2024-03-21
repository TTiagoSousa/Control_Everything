import * as Public_Page from './Imports/public.pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';
import * as Intermediate_Page from './Imports/intermediate.pages';
import * as Private_Page from './Imports/private.pages';
import Authentication_Check from './Authentication/Authentication_Check';

function App() {

  const location = useLocation();

  const Containers_Location = location.pathname === '/';

  return (
    <main>

      {Containers_Location && (
        <> 
          <Header_Index />
        </>
      )}

      <Routes>
        <Route index element={<Public_Page.Index />} />
        <Route path="Auth" element={ <Public_Page.Auth /> } />
        <Route path="activate_user/:token" element={<Intermediate_Page.Active_Account />} />
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