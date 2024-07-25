import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const colorOptions = [
  { color: '#FF0000', label: 'Red' },
  { color: '#008000', label: 'Green' },
  { color: '#0000FF', label: 'Blue' },
  { color: '#FFFF00', label: 'Yellow' },
  { color: '#800080', label: 'Purple' },
];

const AddCylinder = ({ showForm, setShowForm, onSubmit }) => {
  const [formData, setFormData] = useState({
    serialNumber: '',
    capacity: '',
    color: colorOptions[0].color, // Default color
    gasType: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleColorChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, color: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(formData); // Call parent onSubmit handler with form data
    } else {
      console.error('onSubmit is not a function');
    }
    setShowForm(false); // Close the popup form after submission
  };

  const renderColorOptions = () => {
    return colorOptions.map((option, index) => (
      <option key={index} value={option.color} style={{ backgroundColor: option.color, color: '#FFFFFF' }}>
        {option.label}
      </option>
    ));
  };

  if (!showForm) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-60 transition-opacity duration-300">
      <form className="bg-white p-8 rounded shadow-lg transform transition-all duration-300 ease-in-out max-w-3xl w-full relative" onSubmit={handleFormSubmit}>
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-gray-300 rounded-full p-1"
          onClick={() => setShowForm(false)}
        >
          <FiX className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Customer Cylinder</h2>
        <div className="mb-6" style={{ width: '95%', margin: '0 auto' }}>
          <input
            type="text"
            name="serialNumber"
            placeholder="Serial Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleInputChange}
            value={formData.serialNumber}
            required
          />
        </div>
        <div className="mb-6" style={{ width: '95%', margin: '0 auto' }}>
          <input
            type="text"
            name="capacity"
            placeholder="Capacity"
            className="mt-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleInputChange}
            value={formData.capacity}
            required
          />
        </div>
        <div className="flex items-center mb-6" style={{ width: '95%', margin: '0 auto', marginTop: '20px' }}>
          <label className="text-sm font-medium text-gray-700 mr-4" style={{ fontSize: '16px', fontWeight: '600', minWidth: '80px', textAlign: 'left' }}>Color</label>
          <div className="relative">
            <select
              name="color"
              className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleColorChange}
              value={formData.color}
              required
            >
              {renderColorOptions()}
            </select>
          </div>
        </div>
        <div className="mb-6" style={{ width: '95%', margin: '0 auto' }}>
          <input
            type="text"
            name="gasType"
            placeholder="Gas Type"
            className="mt-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleInputChange}
            value={formData.gasType}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-5 px-4 py-2 bg-[#4EA89E] text-white rounded hover:bg-blue-600"
          >
            Add Exchange
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCylinder;
