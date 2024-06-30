// src/Footer.jsx
import React from 'react';
import footer from "/footer1.png";

const Footer = () => {
  return (
    <div className="relative  bg-gray-300 py-10 h-64 mt-20">
      <div className="flex flex-col items-center">
        <div className="relative w-full">
          <h1 className="text-3xl font-bold mb-5 text-yellow-600 text-center">Why choose us</h1>
          <img src={footer} alt="Grocery Bag" className="w-full h-64 object-contain bg-gray-300 mt-8" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-yellow-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
