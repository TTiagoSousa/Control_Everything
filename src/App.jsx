import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';

function App() {

  const authenticated = false

  return (
    <>
      <main>
        <Routes>
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_In' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_In /> } />
        </Routes>
      </main>
    </>
  )
};

export default App;
