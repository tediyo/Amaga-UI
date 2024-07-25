import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Customer Cylinder</th>
            <th className="py-3 px-6 text-left">Exchange Cylinder</th>
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Exchange Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.customerCylinder}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.exchangeCylinder}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.customerName}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.exchangeDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      customerCylinder: PropTypes.string.isRequired,
      exchangeCylinder: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      exchangeDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
