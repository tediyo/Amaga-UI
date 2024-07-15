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
    profilePicture: '',
    isAvailable: false, // Availability status
  });

  // Fetch profile data from the backend
  useEffect(() => {
    axios.get('https://your-backend-api.com/profile')
      .then(response => {
        setProfile({
          name: response.data.name,
          profilePicture: response.data.profilePicture,
          isAvailable: response.data.isAvailable, // Fetch availability status
        });
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  // Fetch random image for profile picture
  useEffect(() => {
    setProfile(prevProfile => ({
      ...prevProfile,
      profilePicture: 'https://picsum.photos/200'
    }));
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="flex">
      {/* Side bar */}
      <div className="bg-[#D9D9D9] text-white w-64 p-4 min-h-screen flex flex-col relative items-center">
        {/* Profile Section */}
        <div className="relative flex flex-col items-center mb-4">
          <img src={profile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-2 relative" />
          <span className="text-lg font-semibold">{profile.name} </span>
          
          {/* Availability Status Indicator */}
          <div
            className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 ${
              profile.isAvailable ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          ></div>
        </div>
        
        <h2 className="text-xl text-black mb-4">Sidebar</h2>
        <nav className="w-full flex-grow flex flex-col justify-center">
          <Link className="block text-black py-2" to="/">Inventory</Link>
          <Link className="block text-black py-2" to="/content">Get Reports</Link>
          <Link className="block text-black py-2" to="/footer">Exchange History</Link>
          <Link className="block text-black py-2" to="/footer">Recieve Histort</Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow">
        {/* Top-left card */}
        <div className="absolute top-0 left-64 bg-white shadow-md rounded-lg p-4 m-2 right-6 rounded-xl h-[150px] flex items-center">
          <h3 className="text-lg font-semibold mb-2 mr-4">Card title</h3>
          <div className="flex space-x-4 w-full">
            {/* Dropdown Menus */}
            {['menu1', 'menu2', 'menu3', 'menu4'].map((menu, index) => (
              <div key={index} className="relative flex-1">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="bg-gray-200 text-black py-2 px-4 rounded-lg focus:outline-none w-full"
                >
                  Menu {index + 1}
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
      </div>

      {/* Main content area */}
      <div className="flex-grow p-4">
        {/* Add other main content here */}
      </div>
    </div>
  );
};

export default Inventory;
