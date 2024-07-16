
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Inventory from './Components/Inventory/Inventory.js';
import Exchange_stock from './Components/Exchange_stock/Exchange_stock.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/exchange" element={<Exchange_stock />} />
      </Routes>
    </Router>
  );
}

export default App;

