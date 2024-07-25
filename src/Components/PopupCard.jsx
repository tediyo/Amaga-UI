import React from 'react';
import MainContentI from '../Components/MainContentI.jsx'; // Ensure this path is correct

const PopupCard = ({ onClose, searchQuery, onItemClick }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-3/4 h-4/5 max-w-4xl mx-auto relative flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">Print Report</h2>
        <div className="flex-grow mt-6 overflow-auto">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Display MainContent inside the PopupCard */}
            <MainContentI 
              searchQuery={searchQuery} 
              onItemClick={onItemClick} 
              buttonType="rightArrow" // Pass any required props to MainContent
            />
          </div>
        </div>
        <button
          className="absolute bottom-4 right-4 bg-[#4EA89E] text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
