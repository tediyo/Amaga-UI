/*import React from 'react';
import PropTypes from 'prop-types';

const TableReceive = () => {
  // Hardcoded data
  const data = [
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
  ];

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className=  "w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Received Cylinder</th>
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Receive Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.ReceiveCylinder}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.customerName}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.ReceiveDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableReceive;*/
import React from 'react';
import PropTypes from 'prop-types';

const TableReceive = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Received Cylinder</th>
            <th className="py-3 px-6 text-left">Dept Name</th>
            <th className="py-3 px-6 text-left">Receive Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.ReceiveCylinder}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.customerName}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.ReceiveDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableReceive.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableReceive;

