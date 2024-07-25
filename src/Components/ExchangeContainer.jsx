import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { colors } from '../Assets/Colors'; // Adjust the import path
import AddCylinder from './AddCylinder'; // Adjust the import path for AddCylinder
import ExchangeCylinder from './ExchangeCylinder'; // Adjust the import path for ExchangeCylinder

const ExchangeContainer = () => {
  const [items1, setItems1] = useState([
    { id: 1, name: 'Item 1', litters: '12L', selected: false },
    { id: 2, name: 'Item 2', litters: '12L', selected: false },
    { id: 3, name: 'Item 3', litters: '12L', selected: false },
    { id: 4, name: 'Item 4', litters: '12L', selected: false },
  ]);

  const [items2, setItems2] = useState([
    { id: 1, name: 'Item A', litters: '10L', selected: false },
    { id: 2, name: 'Item B', litters: '15L', selected: false },
    { id: 3, name: 'Item C', litters: '8L', selected: false },
    { id: 4, name: 'Item D', litters: '12L', selected: false },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showExchange, setShowExchange] = useState(false);

  const handleItemClick = (item, container) => {
    const updatedItems = container === 1 ? items1.map((i) =>
      i.id === item.id ? { ...i, selected: !i.selected, color: colors[i.id % colors.length] } : i
    ) : items2.map((i) =>
      i.id === item.id ? { ...i, selected: !i.selected, color: colors[i.id % colors.length] } : i
    );
    container === 1 ? setItems1(updatedItems) : setItems2(updatedItems);
  };

  const handleItemRemove = (item, container) => {
    const updatedItems = container === 1 ? items1.filter((i) => i.id !== item.id) : items2.filter((i) => i.id !== item.id);
    container === 1 ? setItems1(updatedItems) : setItems2(updatedItems);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleExchange = () => {
    setShowExchange(!showExchange);
  };

  const onSubmitAddCylinder = (formData) => {
    const newCylinder = {
      id: items1.length + 1, // Generate a new unique ID
      name: formData.serialNumber, // Use serialNumber as the name for simplicity
      litters: formData.capacity,
      selected: false,
    };
    setItems1([...items1, newCylinder]); // Add new cylinder to items1
  };

  const addExchangeItem = (selectedItems) => {
    setItems2((prevItems) => [...prevItems, ...selectedItems.map(item => ({ ...item, selected: false }))]);
  };

  return (
    <div className="flex flex-row justify-center items-start space-x-10 pt-10 h-screen overflow-hidden">
      {/* First Flex Column Container */}
      <div className="flex flex-col bg-[#CDCDCD] rounded-lg shadow-xl w-full max-w-lg overflow-hidden h-full relative">
        <h1 className="text-2xl font-bold mb-4 bg-[#4EA89E] text-white p-4 w-full text-center sticky top-0 z-0">Customer Cylinder</h1>
        <div className="flex flex-col bg-[#CDCDCD] p-6 h-full">
          <div className="flex-1 overflow-y-auto rounded-lg">
            {/* List elements */}
            <ul className="space-y-4 w-full">
              {items1.map((item, index) => (
                <li
                  key={item.id}
                  className={`relative bg-white shadow-lg flex justify-between items-center p-1 pl-4 pr-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 ${
                    item.selected ? 'font-bold' : ''
                  }`}
                  onClick={() => handleItemClick(item, 1)}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-200 rounded-l" style={{ backgroundColor: colors[index % colors.length] }}></div>
                  <div className="flex flex-col">
                    <span className="mb-1">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.litters}</span>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-red-300 rounded-r">
                    <button
                      className="ml-auto bg-red-300 text-white flex items-center justify-center h-full"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent item click propagation
                        handleItemRemove(item, 1);
                      }}
                    >
                      <FiX className="text-xl" /> {/* Reduced the icon size */}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Button */}
          <button
            className="absolute bottom-4 right-4 p-2 bg-[#4EA89E] text-white rounded-full hover:bg-blue-600 flex items-center justify-center w-12 h-12"
            onClick={toggleForm}
          >
            <FiPlus className="text-xl" />
          </button>
        </div>
      </div>

      {/* Second Flex Column Container */}
      <div className="flex flex-col bg-[#CDCDCD] rounded-xl shadow-lg w-full max-w-lg overflow-hidden h-full relative">
        <h1 className="text-2xl font-bold mb-4 bg-[#4EA89E] text-white p-4 w-full text-center sticky top-0 z-0">Exchange Stock Cylinder</h1>
        <div className="flex flex-col bg-[#CDCDCD] p-6 h-full">
          <div className="flex-1 overflow-y-auto rounded-lg">
            {/* List elements */}
            <ul className="space-y-4 w-full">
              {items2.map((item, index) => (
                <li
                  key={item.id}
                  className={`relative shadow-lg flex bg-white justify-between items-center p-1 pl-4 pr-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 ${
                    item.selected ? 'font-bold' : ''
                  }`}
                  onClick={() => handleItemClick(item, 2)}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-200 rounded-l" style={{ backgroundColor: colors[index % colors.length] }}></div>
                  <div className="flex flex-col">
                    <span className="mb-1">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.litters}</span>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-red-300 rounded-r">
                    <button
                      className="ml-auto bg-red-300 text-white flex items-center justify-center h-full"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent item click propagation
                        handleItemRemove(item, 2);
                      }}
                    >
                      <FiX className="text-xl" /> {/* Reduced the icon size */}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Button */}
          <button
            className="absolute bottom-4 right-4 p-2 bg-[#4EA89E] text-white rounded-full hover:bg-blue-600 flex items-center justify-center w-12 h-12"
            onClick={toggleExchange}
          >
            <FiPlus className="text-xl" />
          </button>
        </div>
      </div>

      {/* AddCylinder Popup */}
      {showForm && <AddCylinder showForm={toggleForm} setShowForm={setShowForm} onSubmit={onSubmitAddCylinder} />}

      {/* ExchangeCylinder Popup */}
      {showExchange && (
        <ExchangeCylinder 
          showForm={showExchange} 
          setShowForm={setShowExchange} 
          addExchangeItems={addExchangeItem} 
        />
      )}
    </div>
  );
};

export default ExchangeContainer;
