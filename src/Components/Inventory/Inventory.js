import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Inventory = () => {
  // State to manage dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });

  // State to store profile data
  const [profile, setProfile] = useState({
    name: '',
    profilePicture: 'https://picsum.photos/200',
    isAvailable: false, // Availability status
  });

  // State to store item list
  const [items, setItems] = useState([]);

  // State to store selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Fetch profile data from the backend
  useEffect(() => {
    axios.get('https://your-backend-api.com/profile')
      .then(response => {
        setProfile({
          name: response.data.name,
          profilePicture: 'https://picsum.photos/200', // response.data.profilePicture,
          isAvailable: response.data.isAvailable, // Fetch availability status
        });
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  // Fetch item list from the backend
  useEffect(() => {
    axios.get('https://your-backend-api.com/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  // Define predefined selected items with colors
  const predefinedSelectedItems = [
    { id: 'it1', name: 'Item 1', description: 'Description for Item 1', color: 'bg-[#AE0000]' },
    { id: 'it2', name: 'Item 2', description: 'Description for Item 2', color: 'bg-[#00AE26]' },
    { id: 'it4', name: 'Item 4', description: 'Description for Item 4', color: 'bg-[#0050AE]' }
  ];

  // Function to handle item selection
  const handleSelectItem = (item) => {
    setSelectedItems(prevSelectedItems => [...prevSelectedItems, item]);
  };

  // Toggle dropdown menu visibility
  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Handler for "Item List" button click
  const handleItemListClick = () => {
    alert('Item List button clicked!');
    // You can navigate to a different route or perform other actions here
  };

  return (
    <div className="flex">
      {/* Side bar */}
      <div className="bg-[#D9D9D9] text-white w-64 p-4 min-h-screen flex flex-col relative items-center">
        {/* Profile Section */}
        <div className="relative flex flex-col items-center mb-4">
          <img src={profile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-2 relative" />
          <span className="text-lg font-semibold">{profile.name}</span>
          
          {/* Availability Status Indicator */}
          <div
            className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 ${
              profile.isAvailable ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          ></div>
        </div>
        
        <h2 className="text-xl text-black mb-4">John Doe</h2>
        <nav className="w-full flex-grow flex flex-col justify-center">
          <Link className="block text-black py-2" to="/">Inventory</Link>
          <Link className="block text-black py-2" to="/content">Get Reports</Link>
          <Link className="block text-black py-2" to="/footer">Exchange History</Link>
          <Link className="block text-black py-2" to="/footer">Receive History</Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow relative">
        {/* Top-left card */}
        <div className="relative bg-[#D9D9D9] shadow-md rounded-lg p-4 m-2 right-6 left-0 rounded-xl h-[100px] flex items-center">
          <div className="flex space-x-4 w-full">
            {/* Dropdown Menus */}
            {['menu1', 'menu2', 'menu3', 'menu4'].map((menu, index) => (
              <div key={index} className="relative flex-1">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="bg-white text-black py-2 px-4 rounded-lg focus:outline-none w-full flex items-center justify-between"
                  style={{ position: 'relative', paddingRight: '2.5rem' }}
                >
                  Menu {index + 1}
                  <span
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      borderWidth: '5px',
                      borderStyle: 'solid',
                      borderColor: 'transparent transparent #000 transparent',
                    }}
                  ></span>
                </button>
                {dropdownOpen[menu] && (
                  <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* "Item List" Button */}
        <button
          onClick={handleItemListClick}
          className="bg-[#4EA89E] text-white py-1 px-2 rounded-lg mt-4 ml-2 text-sm w-24"
        >
          Item List
        </button>

        {/* Selected Items */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mt-8 mb-4">Selected Items</h2>
          <div className="flex flex-col gap-4">
            {predefinedSelectedItems.map((item, index) => (
              <div key={index} className="relative bg-gray-200 shadow-md rounded-lg p-4 flex items-center">
                {/* Vertical Rectangle with dynamic color */}
                <div className={`absolute top-0 left-0 w-2 h-full ${item.color} rounded-l-lg`}></div>

                <div className="flex-1 ml-10"> {/* Added ml-10 to create space for vertical rectangle */}
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.description}</p>
                </div>

                <button
                  className="bg-[#4EA89E] text-black py-1 px-3 rounded-lg"
                  onClick={() => alert(`Item Code for ${item.name}`)}
                >
                  Item Code
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons at the bottom */}
        <div className="flex justify-end p-4">
          <div className="flex flex-col space-y-4 absolute bottom-0 right-4">
            <button className="bg-[#4EA89E] text-white py-2 px-4 rounded-lg">Item List</button>
            <button className="bg-[#4EA89E] text-white py-2 px-4 rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
