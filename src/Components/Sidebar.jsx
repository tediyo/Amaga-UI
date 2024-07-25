import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import axios from 'axios';
//import profileImg from '../Assets/profile.jpg';

const Sidebar = ({ setActiveItem, setShowForm, status }) => {
  const [activeItem, setActiveItemState] = useState('Exchange stock');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleItemClick = (item) => {
    setActiveItemState(item);
    setActiveItem(item);
  };

  const handleAddButtonClick = () => {
    setShowForm(true); // Show the form when Add button is clicked
  };

  const handleLogout = () => {
    // Clear authentication tokens or perform any necessary logout logic here
    localStorage.removeItem('authToken'); // Example of clearing a token from localStorage

    // Redirect to the login page
    navigate('/'); // Use navigate for redirection
  };

  // // Determine status color based on the status prop
  // const statusColor = status === 'available' ? 'bg-green-500' : 'bg-red-500';

  const [profile, setProfile] = useState({
    name: '',
    profilePicture: 'https://picsum.photos/200',
    isAvailable: false, // Availability status
  });

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

  return (
    <div className="relative bg-gray-300 w-72 h-screen flex flex-col items-center p-4">
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
      <div className="w-full flex flex-col flex-grow pt-10 justify-start">
        <ul className="space-y-2 flex flex-col items-center justify-center">
          <li className="w-full">
            <a
              href="http://localhost:3000/exchange" 
              // onClick={() => handleItemClick('Exchange stock')}
              className={`block p-2 text-xl text-gray-700 hover:text-gray-900 ${activeItem === 'Exchange stock' ? 'font-bold' : ''}`}
            >
              Exchange stock
            </a>
          </li>
          <li className="w-full">
            <a 
              href="http://localhost:3000/history" 
              //onClick={() => handleItemClick('Exchange stock')}
              className={`block p-2 text-xl text-gray-700 hover:text-gray-900 ${activeItem === 'Exchange stock' ? 'font-bold' : ''}`}
            >
              Exchange History
            </a>
          </li> 
          <li className="w-full">
            <a 
              href="http://localhost:3000/receive" 
             // onClick={() => handleItemClick('Exchange stock')}
              className={`block p-2 text-xl text-gray-700 hover:text-gray-900 ${activeItem === 'Exchange stock' ? 'font-bold' : ''}`}
            >
              Receive History
            </a>
          </li>
        </ul>
        
        <button
          className="p-2 mt-4 bg-[#4EA89E] text-white rounded hover:bg-blue-600"
          onClick={handleAddButtonClick}
        >
          Add Exchange
        </button>
      </div>
      <div className="w-full mt-auto">
        {/* Logout Button */}
        <div className="mt-auto p-4">
          <button 
            className="bg-[#D9D9D9] text-black py-2 px-4 rounded-lg w-full flex items-center justify-center"
            onClick={handleLogout}
          >
            <span className="text-xl">{'[-> Log out'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
