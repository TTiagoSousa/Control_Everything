import * as Public_Page from './Imports/public.pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';

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
      </Routes>
    </main>
  )
}

export default App;