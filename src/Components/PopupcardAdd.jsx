import React, { useState } from 'react';

const PopupcardAdd = ({ onClose }) => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    selectedOption: '' // Added state for combo box
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full z-40">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg h-2/3 w-3/4 max-w-4xl mx-auto relative flex flex-col h-[80%]">
        <h2 className="text-2xl font-semibold mb-4">Add Cylinder</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 flex-grow">
          <div className="flex flex-col space-y-2">
            {/* Inner Card for Field 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <input
                type="text"
                id="field1"
                name="field1"
                placeholder='Serial Number'
                value={formData.field1}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {/* Inner Card for Field 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <input
                type="text"
                id="field2"
                name="field2"
                placeholder='Liter'
                value={formData.field2}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {/* Inner Card for Field 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <input
                type="text"
                id="field3"
                name="field3"
                placeholder='Color'
                value={formData.field3}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 flex-grow mb-2">
            {/* Inner Card for Combo Box */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              
              <select
                id="comboBox"
                name="selectedOption"
                placeholder='Gas Type'
                value={formData.selectedOption}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Gas Type</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          {/* Adjust the bottom margin to decrease the gap */}
          <div className="flex-grow"></div>
        </form>
        <button
          className="absolute bottom-4 right-4 bg-[#4EA89E] text-white py-2 px-4 w-1/4  rounded-xl hover:bg-blue-600"
          onClick={onClose}
        >
         Done
        </button>
      </div>
    </div>
  );
};

export default PopupcardAdd;
