import {Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        
      </Routes>
  );
}

export default App;
