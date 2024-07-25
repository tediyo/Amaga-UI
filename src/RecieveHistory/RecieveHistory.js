import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar.jsx';
import TopBar from '../Components/TopBar.jsx';
import TableReceive from '../Components/TableReceive.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecieveHistory = ({ setActiveItem, setShowForm, status }) => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { ReceiveCylinder: 'Cylinder A1',  customerName: 'John Doe',        ReceiveDate: '2024-07-16' },
    { ReceiveCylinder: 'Cylinder A2',  customerName: 'Jane Smith',      ReceiveDate: '2024-07-17' },
    { ReceiveCylinder: 'Cylinder C1',  customerName: 'Alice Johnson',   ReceiveDate: '2024-07-18' },
    { ReceiveCylinder: 'Cylinder C2',  customerName: 'Bob Brown',       ReceiveDate: '2024-07-19' },
    { ReceiveCylinder: 'Cylinder E1',  customerName: 'Charlie Davis',   ReceiveDate: '2024-07-20' },
    { ReceiveCylinder: 'Cylinder E2',  customerName: 'David Wilson',    ReceiveDate: '2024-07-21' },
    { ReceiveCylinder: 'Cylinder G1',  customerName: 'Emma Lee',        ReceiveDate: '2024-07-22' },
    { ReceiveCylinder: 'Cylinder G2',  customerName: 'Frank Miller',    ReceiveDate: '2024-07-23' },
    { ReceiveCylinder: 'Cylinder I1',  customerName: 'Grace Taylor',    ReceiveDate: '2024-07-24' },
    { ReceiveCylinder: 'Cylinder I2',  customerName: 'Henry Moore',     ReceiveDate: '2024-07-25' },
  ]); // Example data
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // Filter data based on search query
    if (searchQuery === '') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item =>
        item.ReceiveCylinder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ReceiveDate.toLowerCase().includes(searchQuery.toLowerCase())
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
          <div><TableReceive data={filteredData} /></div>
        </div>
      </div>
    </div>
  );
};

export default RecieveHistory;
