import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SidebarI = ({ setActiveItem, setShowForm, setShowPopup }) => {
  const [activeItem, setActiveItemState] = useState('Exchange stock');
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItemState(item);
    setActiveItem(item);

    // Show popup based on item clicked
    if (item === 'Print Report' || item === 'Add Cylinder') {
      setShowPopup(true); // Show the popup
    } else {
      setShowPopup(false); // Hide the popup for other items
    }
  };

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const [profile, setProfile] = useState({
    name: '',
    profilePicture: 'https://picsum.photos/200',
    isAvailable: false,
  });

  useEffect(() => {
    axios.get('https://your-backend-api.com/profile')
      .then(response => {
        setProfile({
          name: response.data.name,
          profilePicture: 'https://picsum.photos/200',
          isAvailable: response.data.isAvailable,
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
        <div
          className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 ${
            profile.isAvailable ? 'bg-green-500' : 'bg-yellow-500'
          }`}
        ></div>
      </div>
      <h2 className="text-xl text-black mb-4">John Doe</h2>
      <div className="w-full flex flex-col flex-grow pt-10 justify-start">
        <ul className="space-y-2 flex flex-col items-center justify-center">
          <li className="w-full flex justify-center">
            <button
              className="w-full max-w-xs p-4 mt-4 bg-[#4EA89E] text-white text-xl rounded hover:bg-blue-600"
              onClick={() => handleItemClick('Print Report')}
            >
              Print Report
            </button>
          </li>
          <li className="w-full flex justify-center">
            <button
              className="w-full max-w-xs p-4 mt-4 bg-[#4EA89E] text-white text-xl rounded hover:bg-blue-600"
              onClick={() => handleItemClick('Add Cylinder')}
            >
              Add Cylinder
            </button>
          </li>
          <li className="w-full flex justify-center">
            <button
              className="w-full max-w-xs p-4 mt-4 bg-[#4EA89E] text-white text-xl rounded hover:bg-blue-600"
              onClick={() => handleItemClick('Transfer Cylinder')}
            >
              Transfer Cylinder
            </button>
          </li>
        </ul>
      </div> 
      <div className="w-full mt-auto">
        <div className="mt-auto p-4">
          <button
            className="w-full max-w-xs bg-[#D9D9D9] text-black py-3 px-6 text-xl rounded-lg flex items-center justify-center"
            onClick={handleLogout}
          >
            <span className="text-xl">{'[-> Log out'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarI;
