import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exchange_stock = () => {
  // State to store profile data
  const [profile, setProfile] = useState({
    name: '',
    profilePicture: 'https://picsum.photos/200',
    isAvailable: false, // Availability status
  });

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

  return (
    <div className="flex">
      {/* Side bar */}
      <div className="bg-[#D9D9D9] text-white w-64 p-4 min-h-screen flex flex-col">
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

        {/* Navigation Links centered vertically */}
        <div className="flex-grow flex flex-col justify-center w-full">
          <nav className="w-full flex flex-col h-[300px]">
            <Link className="block text-black py-2" to="/">Exchange Stock</Link>
            <Link className="block text-black py-2" to="/content">Exchange History</Link>
            <Link className="block text-black py-2" to="/footer">Receive History</Link>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-auto p-4">
          <button className="bg-[#D9D9D9] text-black py-2 px-4 rounded-lg w-full flex items-center justify-center">
            <span className="text-xl">{'[-> Log out'}</span>
          </button>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex flex-grow p-4 space-x-8 relative"> 
        {/* Adjust space-x-8 for spacing */}
        {/* Card 1 */}
        <div className="bg-[#CDCDCD] shadow-md rounded-lg p-4 flex-1 h-[550px] relative">
          <div className="bg-[#4EA89E] text-black text-center py-4 rounded-t-lg absolute top-0 left-0 w-full">
            Customer Cylinder
          </div>
          {/* Content area for Card 1 */}
          <div className="relative mt-16"> {/* Adjust margin-top to ensure content is below the label */}
            <div className="bg-[#FFFFFF] shadow-md rounded-xl p-4 relative">
              <div className="absolute left-0 top-0 h-full w-2 bg-red-500 rounded-l-xl"></div> {/* Vertical Rectangle */}
              <div className="pl-8"> {/* Padding-left to ensure content doesn't overlap with the rectangle */}
                <h4 className="text-md font-semibold mb-2">Inner Card 1</h4>
                <p>Content for the inner card 1 goes here.</p>
              </div>
            </div>
          </div>
          {/* + Button outside of the inner card */}
          <button className="absolute bottom-4 right-4 bg-[#4EA89E] text-white w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">+</span>
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-[#CDCDCD] shadow-md rounded-lg p-4 flex-1 h-[550px] relative">
          <div className="bg-[#4EA89E] text-black text-center py-4 rounded-t-lg absolute top-0 left-0 w-full">
            Exchange Stock Cylinder
          </div>
          {/* Content area for Card 2 */}
          <div className="relative mt-16"> {/* Adjust margin-top to ensure content is below the label */}
            <div className="bg-[#FFFFFF] shadow-md rounded-xl p-4 relative">
              <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div> {/* Vertical Rectangle */}
              <div className="pl-8"> {/* Padding-left to ensure content doesn't overlap with the rectangle */}
                <h4 className="text-md font-semibold mb-2">Inner Card 2</h4>
                <p>Content for the inner card 2 goes here.</p>
              </div>
            </div>
          </div>
          {/* + Button outside of the inner card */}
          <button className="absolute bottom-4 right-4 bg-[#4EA89E] text-white w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">+</span>
          </button>
        </div>
         {/* Buttons at the bottom */}
         <div className="flex justify-end p-4">
          <div className="flex flex-col space-y-4 absolute bottom-0 right-24">
            
            <button className="bg-[#4EA89E] text-white py-2 px-4 rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange_stock;
