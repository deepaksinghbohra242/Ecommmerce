// WishlistCard.js
import React from 'react';

const WishlistCard = ({ itemName, itemPrice, itemRating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-2">{itemName}</h2>
      <p className="text-gray-700 mb-2">{itemPrice}</p>
      <div className="flex items-center">
        <p className="text-gray-700 mr-2">{itemRating}</p>
        {/* Add rating component if available */}
      </div>
    </div>
  );
};

export default WishlistCard;
