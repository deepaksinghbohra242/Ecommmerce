import React from "react";

const ItemCard = ({
  id,
  itemName,
  itemType,
  rate,
  brand,
  description,
  img_path,
}) => {
  return (
    <div className="flex justify-between p-1 gap-5 bg-gradient-to-rp-3 rounded-2xl shadow-lg">
      <div className="flex gap-5 h-64 capitalize rounded-2xl">
        <div className="relative h-35">
          <img
            src={img_path}
            alt={`Item - ${itemName}`}
            className="object-cover mb-4 w-45 h-full rounded"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded"></div>
        </div>
        <div className="">
          <h2 className="text-3xl font-extrabold mb-2 text-indigo-800">
            {itemName}
          </h2>
          <p className="text-lg">
            Type: <span className="font-semibold">{itemType}</span>
          </p>
          <p className="text-lg">
            Rate: <span className="font-semibold">${rate}</span>
          </p>
          <p className="text-lg">
            Brand: <span className="font-semibold">{brand}</span>
          </p>
          <p className="text-lg">
            Description: <span className="font-semibold">{description}</span>
          </p>
        </div>
      </div>
      {/* Additional actions or buttons can be added here */}
    </div>
  );
};

export default ItemCard;
