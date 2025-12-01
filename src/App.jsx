//# IMPORTO BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//# IMPORTO REACT ROUTER DOM
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

//# IMPORTO DATABASE E COMPONENTI
import { programmations } from '../database/db.js';
import HomePage from './HomePage.jsx';
import Details from './Details.jsx';

export default function App() {

  console.log('Database completo:', programmations);    

  return (
    <>
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      </BrowserRouter>
    </>
  )
};


