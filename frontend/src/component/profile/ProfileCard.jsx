// ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, email, phoneNumber, type, profileImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-4">
        <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <p className="text-gray-700">Phone Number: {phoneNumber}</p>
      <p className="text-gray-700">Type: {type}</p>
    </div>
  );
};

export default ProfileCard;
