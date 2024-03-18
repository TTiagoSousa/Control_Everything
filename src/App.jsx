import * as Public_Page from './Imports/public.pages';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {

  return (
    <main>
      <Routes>
        <Route index element={<Public_Page.Index />} />
      </Routes>
    </main>
  )
}

export default App;