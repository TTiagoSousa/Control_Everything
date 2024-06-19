import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route index element={<Public_Page.Index />} />
        </Routes>
      </main>
    </>
  )
};

export default App;
