import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import MainContent from './MainContent'; // Adjust the import path

const ExchangeCylinder = ({ showForm, setShowForm, addExchangeItems }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  if (!showForm) return null;

  const handleAddExchangeItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handleExchangeSubmit = () => {
    addExchangeItems(selectedItems);
    setSelectedItems([]); // Clear selected items
    setShowForm(false); // Close the form
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-60 transition-opacity duration-300">
      <div className="bg-white rounded shadow-lg transform transition-all duration-300 ease-in-out max-w-3xl w-full relative max-h-[80vh] overflow-auto" style={{ backgroundColor: '#F1F1F1' }}>
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-gray-300 rounded-full p-1"
          onClick={() => setShowForm(false)}
        >
          <FiX className="text-2xl" />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center sticky top-0 py-3 px-4 z-10 shadow-sm bg-white">Exchange Cylinder</h2>
        <div className="mb-6 relative z-0" style={{ width: '95%', margin: '0 auto', paddingTop: '1rem' }}>
          <MainContent buttonType="addExchange" onItemClick={handleAddExchangeItem} />
        </div>
        <div className="flex justify-end px-4 py-2">
          {selectedItems.length > 0 && (
            <button
              onClick={handleExchangeSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Exchange ({selectedItems.length})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExchangeCylinder;
