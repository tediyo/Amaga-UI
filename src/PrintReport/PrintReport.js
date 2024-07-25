import React, { useState } from 'react';
import SidebarI from '../Components/SidebarI.jsx';
import MainContent from '../Components/MainContent.jsx';
import TopBar from '../Components/TopBar.jsx';
import PopupCard from '../Components/PopupCard.jsx';
import PopupcardAdd from '../Components/PopupcardAdd.jsx';

const PrintReport = () => {
  const [activeItem, setActiveItem] = useState('Exchange stock');
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [buttonType, setButtonType] = useState('rightArrow');
  const [popupType, setPopupType] = useState(null);

  const handleSetActiveItem = (item) => {
    setActiveItem(item);
    setShowForm(true);
    setButtonType('rightArrow');

    if (item === 'Print Report') {
      setShowPopup(true);
      setPopupType('printReport');
    } 
    else if (item === 'Add Cylinder') {
      setShowPopup(true);
      setPopupType('addCylinder');
    } else {
      setShowPopup(false);
      setPopupType(null);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupType(null);
  };

  return (
    <div className="relative flex h-screen">
      <SidebarI
        setActiveItem={handleSetActiveItem}
        setShowForm={setShowForm}
        setShowPopup={setShowPopup}
      />
      <div className={`flex flex-col flex-grow overflow-y-auto ${showPopup ? 'blurred-background' : ''}`}>
        <TopBar onSearch={setSearchQuery} />
        <MainContent buttonType={buttonType} onItemClick={handleSetActiveItem} searchQuery={searchQuery} />
      </div>
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
          {popupType === 'printReport' && <PopupCard onClose={handleClosePopup} />}
          {popupType === 'addCylinder' && <PopupcardAdd onClose={handleClosePopup} />}
        </>
      )}
    </div>
  );
};

export default PrintReport;
