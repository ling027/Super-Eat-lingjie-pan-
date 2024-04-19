import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/SignUp/Signup';
import Client from './views/ClientManagement/Client'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Client" element={<Client/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App