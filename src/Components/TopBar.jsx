import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const TopBar = ({ onSearch }) => {
  return (
    <div className="p-8 rounded-3xl mt-5 mx-4 flex justify-center items-center">
      <div className="w-full flex items-center">
        <div className="relative flex w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-12 py-2 border border-gray-300 rounded-l rounded-r-none focus:outline-none"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="flex-shrink-0 p-2 pl-10 pr-10 ml-2 bg-[#4EA89E] text-white rounded-l rounded-r hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
