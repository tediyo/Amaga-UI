import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import AddCylinder from './AddCylinder';
import { colors } from '../Assets/Colors'; // Adjust the import path

const MainContentTransfer = ({ buttonType, onItemClick, searchQuery = '' }) => {
  const [items, setItems] = useState([
    { id: 1, idNum: '31272375521', Numbers: 'Little 12L', selected: false },
    { id: 2, idNum: '31272375521', Numbers: 'Little 12L', selected: false },
    { id: 3, idNum: '31272375521', Numbers: 'Little 12L', selected: false },
    { id: 4, idNum: '31272375521', Numbers: 'Little 12L', selected: false },
    // { id: 5, name: 'Item 5', litters: '12L', selected: false },
    // { id: 6, name: 'Item 6', litters: '12L', selected: false },
    // { id: 7, name: 'Item 7', litters: '12L', selected: false },
    // { id: 8, name: 'Item 8', litters: '12L', selected: false },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleItemClick = (clickedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === clickedItem.id ? { ...item, selected: !item.selected } : item
      )
    );
    if (buttonType === 'addExchange') {
      onItemClick(clickedItem);
    }
  };

  const handleCheckboxChange = (clickedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === clickedItem.id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleFormSubmit = (formData) => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      litters: formData.capacity,
      selected: false,
      ...formData,
    };

    setItems([...items, newItem]);
    setShowForm(false);
  };

  // Filter items based on the search query
  const filteredItems = items.filter(item =>
    item.idNum.includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-8 py-4 flex flex-col">
      <ul className="space-y-4 flex-1">
        {filteredItems.map((item, index) => (
          <li
            key={item.id}
            className={`relative flex justify-between items-center p-2 pl-8 pr-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 ${item.selected ? 'font-bold bg-white' : ''}`}
            style={{ borderRadius: '0.5rem', backgroundColor: '#FFFFFF' }}
            onClick={() => handleItemClick(item)}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-5 rounded-l"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <div className="flex flex-col">
              <span className="mb-1">{item.idNum}</span>
              <span className="text-sm text-gray-500">{item.Numbers}</span>
            </div>
            <label
              className="ml-auto relative cursor-pointer"
              style={{ width: '1.5rem', height: '1.5rem' }}
              onClick={(e) => e.stopPropagation()} // Prevent the click event from propagating to the li element
            >
              <input
                type="checkbox"
                className="hidden"
                checked={item.selected}
                onChange={() => handleCheckboxChange(item)}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center rounded border border-gray-300 ${item.selected ? 'bg-[#4EA89E]' : 'bg-white'}`}
              >
                {item.selected && <FiCheck className="text-white w-4 h-4" />}
              </div>
            </label>
          </li>
        ))}
      </ul> 

      {showForm && <AddCylinder showForm={showForm} setShowForm={setShowForm} onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default MainContentTransfer;