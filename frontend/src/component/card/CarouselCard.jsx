import React from 'react';

const CarouselCard = ({ bg, title, price, description, buttonText, discount }) => {
  return (
    <div className="min-w-[40%] w-1/3 flex-shrink-0 relative h-96">
      <img src={bg} alt={title} className="w-full h-full  rounded-lg shadow-lg" />
      <div className="absolute inset-0 flex flex-col justify-end p-4  bg-opacity-50 rounded-lg">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        {price && <p className="text-gray-200">{price}</p>}
        {description && <p className="text-gray-200">{description}</p>}
        {buttonText && <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">{buttonText}</button>}
        <div className="absolute top-4 left-4 bg-violet-400 text-gray-200 border rounded-lg px-2 py-1">
        {discount && <p className="text-gray-200   rounded-lg w-13 bg-violet-400">{discount}</p>}

</div>
      </div>
    </div>
  );
};

export default CarouselCard;
