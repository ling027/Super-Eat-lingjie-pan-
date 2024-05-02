import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/SignUp/Signup';
import Client from './views/ClientManagement/Client'
import ClientMenuItem from './components/ClientMenuItem/ClientMenuItem';
import LandingPage from './views/LandingPage/LandingPage'
import ContactUs from './views/ContactUs/ContactUs'
import Reservation from './views/Reservation/Reservation'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/Client" element={<Client/>}/>
        <Route path="/MenuItem" element={<ClientMenuItem/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/reservation" element={<Reservation/>} />
      </Routes>
    </div>
  );
};

export default App