import React, { useState } from 'react';
import SidebarI from '../Components/SidebarI.jsx';
import MainContent from '../Components/MainContent.jsx';
import TopBar from '../Components/TopBar.jsx';
import PopupcardAdd from '../Components/PopupcardAdd.jsx';

const AddCylinder = () => {
  const [activeItem, setActiveItem] = useState('Exchange stock');
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [buttonType, setButtonType] = useState('rightArrow');

  const handleSetActiveItem = (item) => {
    setActiveItem(item);
    setShowForm(true);
    setButtonType('rightArrow');

    if (item === 'Add Cylinder ') {
      setShowPopup(true); // Show the popup when Add Cylinder is clicked
    } else {
      setShowPopup(false); // Hide the popup when other items are clicked
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="relative flex h-screen">
      <SidebarI
        setActiveItem={handleSetActiveItem}
        setShowForm={setShowForm}
        setShowPopup={setShowPopup} // Pass setShowPopup to SidebarI
      />
      <div className={`flex flex-col flex-grow overflow-y-auto ${showPopup ? 'blurred-background' : ''}`}>
        <TopBar onSearch={setSearchQuery} />
        <MainContent buttonType={buttonType} onItemClick={handleSetActiveItem} searchQuery={searchQuery} />
      </div>
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
           <PopupcardAdd onClose={handleClosePopup} /> 
        </>
      )}
    </div>
  );
};

export default AddCylinder;
