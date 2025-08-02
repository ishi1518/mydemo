import React from 'react';
import banner1 from '../assets/banner1.jpeg';

export const Banner1: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img
        src={banner1}
        alt="Banner 1"
        className="w-full h-full object-cover"
      />
    </div>
  );
}; 