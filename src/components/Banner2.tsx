import React from 'react';
import banner2 from '../assets/banner2.jpg';

export const Banner2: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img
        src={banner2}
        alt="Banner 2"
        className="w-full h-full object-cover"
      />
    </div>
  );
}; 