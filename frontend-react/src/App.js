import {Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Missing from './pages/Missing';
import Landing from "./pages/Landing";
import GetContact from './components/GetContact';
import Leaflet from './components/Leaflet';
import NewMap from './components/NewMap';


function App() {
  return (
    

      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Landing />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/contacts" element={<GetContact />}></Route>
          <Route path="/lef" element={<Leaflet />}></Route>
          <Route path="/newmap" element={<NewMap />}></Route>
          
          
          {/*PROTECTED ROUTES*/}
          <Route element={<RequireAuth />}>
            
          </Route>

          {/*404 ROUTE*/}
          <Route path="*" element={<Missing />}></Route>
        </Route>
        
      </Routes>
  );
}

export default App;
