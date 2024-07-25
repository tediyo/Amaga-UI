import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar.jsx';
import TopBar from '../Components/TopBar.jsx';
import Table from '../Components/Table.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExchangeHistory = ({ setActiveItem, setShowForm, status }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { customerCylinder: 'Cylinder A1', exchangeCylinder: 'Cylinder B1', customerName: 'John Doe', exchangeDate: '2024-07-16' },
    { customerCylinder: 'Cylinder A2', exchangeCylinder: 'Cylinder B2', customerName: 'Jane Smith', exchangeDate: '2024-07-17' },
    { customerCylinder: 'Cylinder C1', exchangeCylinder: 'Cylinder D1', customerName: 'Alice Johnson', exchangeDate: '2024-07-18' },
    { customerCylinder: 'Cylinder C2', exchangeCylinder: 'Cylinder D2', customerName: 'Bob Brown', exchangeDate: '2024-07-19' },
    { customerCylinder: 'Cylinder E1', exchangeCylinder: 'Cylinder F1', customerName: 'Charlie Davis', exchangeDate: '2024-07-20' },
    { customerCylinder: 'Cylinder E2', exchangeCylinder: 'Cylinder F2', customerName: 'David Wilson', exchangeDate: '2024-07-21' },
    { customerCylinder: 'Cylinder G1', exchangeCylinder: 'Cylinder H1', customerName: 'Emma Lee', exchangeDate: '2024-07-22' },
    { customerCylinder: 'Cylinder G2', exchangeCylinder: 'Cylinder H2', customerName: 'Frank Miller', exchangeDate: '2024-07-23' },
    { customerCylinder: 'Cylinder I1', exchangeCylinder: 'Cylinder J1', customerName: 'Grace Taylor', exchangeDate: '2024-07-24' },
    { customerCylinder: 'Cylinder I2', exchangeCylinder: 'Cylinder J2', customerName: 'Henry Moore', exchangeDate: '2024-07-25' },
  ]); // Example data
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // Filter data based on search query
    if (searchQuery === '') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item =>
        item.customerCylinder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.exchangeCylinder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.exchangeDate.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }, [searchQuery, data]);

  return (
    <div className="relative flex h-screen">
      <Sidebar setActiveItem={setActiveItem} setShowForm={setShowForm} status={status} />
      <div className="flex flex-col flex-grow">
        <TopBar onSearch={setSearchQuery} />
        <div className="flex-grow p-4">
          {/* Main content goes here */}
          <div><Table data={filteredData} /></div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeHistory;
