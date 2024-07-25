import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar.jsx'; 
import TopBar from '../Components/TopBar.jsx';
import MainContent from '../Components/MainContent.jsx';
import ExchangeContainer from '../Components/ExchangeContainer.jsx';

const ExchangeStock = () => {
  const [activeItem, setActiveItem] = useState('Exchange stock');
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [buttonType, setButtonType] = useState('rightArrow');

  const handleSetActiveItem = (item) => {
    setActiveItem(item);
    setShowForm(false); // Hide the form when changing active item
    setButtonType('rightArrow'); // Default to right arrow when changing active item
  };

  const handleAddButtonClick = () => {
    setShowForm(true); // Show the form when Add button is clicked
    setButtonType('addExchange');
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveItem={handleSetActiveItem} setShowForm={handleAddButtonClick} setButtonType={setButtonType} />
      <div className="flex flex-col flex-grow overflow-y-auto">
        {!showForm && (
          <>
            <TopBar onSearch={setSearchQuery} />
            <MainContent buttonType={buttonType} onItemClick={handleSetActiveItem} searchQuery={searchQuery} />
          </>
        )}
        {showForm && <ExchangeContainer />}
      </div>
    </div>
  );
};


export default ExchangeStock;