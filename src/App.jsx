import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import * as Private_Page from './Imports/private.pages';
import Authentication_Check from './Authentication/Authentication_Check';
import { DataBaseState } from './Contexts/DataBase_Context';
import * as Intermediate_Page from './Imports/intermediary.pages';

function App() {

  const { authenticated } = DataBaseState();

  return (
    <>
      <main>
        <Routes>
          
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_In' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_In /> } />
          <Route path='Sign_Up' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_Up /> } />
          <Route path="Recover_Password" element={authenticated ? <Navigate to="/" /> : <Public_Page.Recover_Password />} />

          <Route path="Reset_Password/:token" element={authenticated ? <Navigate to="/" /> : <Intermediate_Page.Reset_Password />} />
          <Route path="Active_Account/:token" element={ authenticated ? <Navigate to="/" /> :  <Intermediate_Page.Active_Account /> } />
          <Route path="*" element={<Intermediate_Page.Not_Found />} />

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
    </>
  )
};

export default App;
