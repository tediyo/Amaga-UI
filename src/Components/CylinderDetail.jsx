import React from 'react';
import { FiX } from 'react-icons/fi';
import arrow1 from '../Assets/Arrow 1.png';
import arrow2 from '../Assets/Arrow 2.png';
import arrow3 from '../Assets/Arrow 3.png';
import arrow4 from '../Assets/Arrow 4.png';
import cylinder from '../Assets/cylinder.png'; // Ensure the path to the cylinder image is correct
import colorMapping from '../Assets/Colors'; // Import color mapping

const CylinderDetail = ({ item, onClose }) => {
  if (!item) return null;

  // Lookup the color name based on the item's color hex value
  const colorName = colorMapping[item.color] || 'Unknown Color';

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-60 transition-opacity duration-300 z-10">
      <div className="relative bg-white rounded shadow-lg pl-40 pt-10 pr-40 pb-20 w-3/4 max-w-4xl flex flex-col">
        {/* Heading section */}
        <h2 className="text-3xl font-semibold absolute top-4 left-4 pt-4 pl-8 z-20">Cylinder</h2>
        
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-gray-300 rounded-full p-1 z-30"
          onClick={onClose}
        >
          <FiX className="text-2xl" />
        </button>

        {/* Image and Details section */}
        <div className="flex flex-row mt-16">
          {/* Image section */}
          <div className="relative w-1/3 flex-shrink-0">
            <div 
              className="w-full h-full rounded overflow-hidden" 
              style={{ backgroundColor: item.color }}
            >
              <img
                src={cylinder} // Use the cylinder image with transparency
                alt={item.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Details section */}
          <div className="flex flex-col justify-center items-start w-2/3 -ml-4">
            <div className="flex flex-col w-full mt-12">
              {/* Each line replaced by an image */}
              <div className="flex items-center">
                <img
                  src={arrow1} // Use the imported image path
                  alt="Arrow 1"
                  className="w-18 h-auto object-contain mr-2 mt-4 -mb-2" // Adjust width as needed
                />
                <p className="flex-1 text-left"><strong>Cylinder Id :</strong> {item.name}</p>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={arrow2} // Use the imported image path
                  alt="Arrow 2"
                  className="w-18 h-auto object-contain mr-2" // Adjust width as needed
                />
                <p className="flex-1 text-left"><strong>Serial Number :</strong> {item.serialNumber}</p>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={arrow3} // Use the imported image path
                  alt="Arrow 3"
                  className="w-18 h-auto object-contain mr-2 -mt-8" // Adjust width as needed
                />
                <p className="flex-1 text-left">
                  <strong>Color :</strong> {colorName} 
                  <span 
                    className="inline-block ml-2 w-8 h-4 rounded" 
                    style={{ backgroundColor: item.color }}
                  ></span>
                </p>
              </div>
              <div className="flex items-center -mt-16">
                <img
                  src={arrow4} // Use the imported image path
                  alt="Arrow 4"
                  className="w-18 h-auto object-contain mr-2 mb-16" // Adjust width as needed
                />
                <p className="flex-1 text-left"><strong>Litters:</strong> {item.litters}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add to Exchange button */}
        <button
          type="button"
          className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          style={{ backgroundColor: '#4EA89E' }}
        >
          Add to Exchange
        </button>
      </div>
    </div>
  );
};

export default CylinderDetail;
