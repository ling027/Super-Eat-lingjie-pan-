import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Client from './views/ClientManagement/Client'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Client" element={<Client/>} />
      </Routes>
    </div>
  );
};

export default App