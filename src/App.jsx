import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/SignUp/Signup';
import Client from './views/ClientManagement/Client'
import ClientMenuItem from './components/ClientMenuItem/ClientMenuItem';
import LandingPage from './views/LandingPage/LandingPage'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Client" element={<Client/>}/>
        <Route path="/MenuItem" element={<ClientMenuItem/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/landingpage" element={<LandingPage/>} />
      </Routes>
    </div>
  );
};

export default App