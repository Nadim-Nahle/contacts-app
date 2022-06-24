import {Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Missing from './pages/Missing';

function App() {
  return (
    

      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/*PROTECTED ROUTES*/}
          <Route path="/contact" element={<Contact />}></Route>

          {/*404 ROUTE*/}
          <Route path="/error" element={<Missing />}></Route>
        </Route>
        
      </Routes>
  );
}

export default App;
