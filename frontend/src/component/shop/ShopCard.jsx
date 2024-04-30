import React from "react";

const ShopCard = ({
  shopName,
  shopkeeperName,
  address,
  shopId,
  img_path,
}) => {
  const imageUrl = `http://localhost:3000/${img_path}`;
  return (
    <div className="flex justify-between w-full gap-5 bg-gradient-to-rp-3 rounded-2xl shadow-lg mb-8">
      <div className="flex gap-5 h-64 capitalize rounded-2xl">
        <div className="relative h-35">
          <img
            src={imageUrl}
            alt={`Shop - ${shopName}`}
            className="object-cover mb-4 w-64 h-full rounded"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded"></div>
        </div>
        <div className="">
          <h2 className="text-3xl font-extrabold mb-2 text-indigo-800">
            {shopName}
          </h2>
          <p className="text-lg">
            Shopkeeper: <span className="font-semibold">{shopkeeperName}</span>
          </p>
          <p className="text-lg">
            Address: <span className="font-semibold">{address}</span>
          </p>
          <p className="text-lg">
            Shop ID: <span className="font-semibold">{shopId}</span>
          </p>
        </div>
      </div>
      {/* Additional actions or buttons can be added here */}
    </div>
  );
};

export default ShopCard;
