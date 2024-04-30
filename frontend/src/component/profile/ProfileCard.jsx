import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="profile w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <div className="flex">
          <div className="profile-image w-24 h-24 rounded-full overflow-hidden mr-8">
            <img src="images/1.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
          </div>
          <div className="profile-details">
            <div className="profile-item mb-4">Name: John Doe</div>
            <div className="profile-item mb-4">Phone Number: 123-456-7890</div>
            <div className="profile-item mb-4">Address: 123 Street, City, Country</div>
            <div className="profile-item mb-4">Email: johndoe@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
