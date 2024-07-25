
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login.js';
//import Inventory from './Inventory/Inventory.js';
import RecieveHistory from './RecieveHistory/RecieveHistory.js';
import ExchangeHistory from './ExchangeHistory/ExchangeHisory.js';
import ExchangeStock from './ExchangeStock/ExchangeStock.js';
import Admin from './Admin/Admin.js';
import PrintReport from './PrintReport/PrintReport.js';
import AddCylinder from './AddCylinder/AddCylinder.js';
import './styles.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
        <Route path="/exchange" element={<ExchangeStock />} />
        <Route path="/history" element={<ExchangeHistory />} />
        <Route path="/receive" element={<RecieveHistory />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/report" element={<PrintReport />} />
        <Route path="/add" element={<PrintReport />} />
      </Routes>
    </Router>
  );
}

export default App;

