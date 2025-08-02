import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import two from '../assets/two.png';
import two1 from '../assets/two1.png';

export const Product2: React.FC = () => {
  return (
    <div className="relative bg-white border p-4 group overflow-hidden">
      <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1">
        30% OFF
      </span>

      <span className="absolute top-2 right-2 text-gray-500 text-md">
        <FontAwesomeIcon icon={faBagShopping} />
      </span>

      <div className="relative w-full h-48 mb-4 overflow-hidden">
        <img
          src={two}
          alt="Product 2"
          className="w-full h-full object-contain absolute top-0 left-0 
                     transition-opacity duration-300 opacity-100 
                     group-hover:opacity-0"
        />
        <img
          src={two1}
          alt="Product 2 Hover"
          className="w-full h-full object-contain absolute top-0 left-0 
                     opacity-0 -translate-y-2 
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
        />
      </div>

      <h3 className="text-gray-800 font-semibold text-sm">
        TESSELLATE ETERNITY DIAMOND WEDDING BANDS
      </h3>
      <div className="flex items-center mt-2">
        <del className="text-gray-400 mr-2 text-sm">$8800</del>
        <span className="text-teal-600 font-bold text-sm">$6160</span>
      </div>
      <div className="flex space-x-2 mt-2">
        <span className="w-4 h-4 rounded-full bg-pink-100 border"></span>
        <span className="w-4 h-4 rounded-full bg-red-200 border"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-300 border"></span>
      </div>
      <span className="absolute bottom-4 right-4 text-gray-400 text-xl">
        <FontAwesomeIcon icon={faHeart} />
      </span>
    </div>
  );
}; 