import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/data',{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
      {user && <ProfileCard name={user.name} email={user.email} phoneNumber={user.phoneNumber} type={user.type} />}
    </>
  );
}

export default Profile;
