import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import WishlistCard from './WishlistCard';
import HomeImg from '../../assets/image.png';

function Profile() {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/data', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchWishlistData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/wishlist');
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
      }
    };

    fetchUserData();
    fetchWishlistData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
        {user && (
          <ProfileCard
            name={user.name}
            email={user.email}
            phoneNumber={user.phoneNumber}
            type={user.type}
            profileImage={HomeImg}
          />
        )}
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map(item => (
          <WishlistCard
            key={item.id}
            itemName={item.name}
            itemImage={item.image}
            itemPrice={item.price}
            itemRating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
