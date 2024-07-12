import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Inventory = () => {
  const menuItems = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="flex">
      {/* Side bar */}
      <div className=" text-white w-64 p-4 min-h-screen flex flex-col relative"
         style={{ backgroundColor: '#D9D9D9' }}
      >
        <h2 className="text-xl mb-4">Sidebar</h2>
        <nav>
          <Link className="block py-2" to="/">Home</Link>
          <Link className="block py-2" to="/content">Content</Link>
          <Link className="block py-2" to="/footer">Footer</Link>
        </nav>
      </div>
      <div className="flex flex-col flex-grow">
        {/* top-left card */}
        <div className="absolute top-0 left-64 bg-white shadow-md rounded-lg p-4 m-2 right-9 rounded-xl flex flex-col h-[150px] w-[calc(100%-16rem)]">
          {/* Dropdown menus */}
          <div className="flex space-x-4 mb-2">
            <div className="flex-1">
              <DropdownMenu title="Menu 1" items={menuItems} />
            </div>
            <div className="flex-1">
              <DropdownMenu title="Menu 2" items={menuItems} />
            </div>
            <div className="flex-1">
              <DropdownMenu title="Menu 3" items={menuItems} />
            </div>
            <div className="flex-1">
              <DropdownMenu title="Menu 4" items={menuItems} />
            </div>
          </div>
          {/* Card content */}
        
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
