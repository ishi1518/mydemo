import React from 'react';
import { Banner1 } from '../components/Banner1';
import { Banner2 } from '../components/Banner2';
import { Product1 } from '../components/Product1';
import { Product2 } from '../components/Product2';
import { Product3 } from '../components/Product3';
import { Product4 } from '../components/Product4';


export const Test = () => {
  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <Banner1 />

          <Product1 />

          <Product2 />
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <Product3 />

          <Product4 />

          <Banner2 />
        </div>
      </div>
    </>
  );
};
