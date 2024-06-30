import React from 'react';

const ProductCard = ({ imgSrc, altText, name, description, weight, price, originalPrice, discount, discountLabel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={imgSrc} alt={altText} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          {weight && <p className="text-gray-500 mb-2">{weight}</p>}
          <div className="flex items-center mb-2">
            {price && <p className="text-lg font-semibold text-gray-900">{price}</p>}
            {originalPrice && (
              <p className="text-sm text-gray-500 line-through ml-2">{originalPrice}</p>
            )}
          </div>
        </div>
        {discount && (
          <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            {discountLabel}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
