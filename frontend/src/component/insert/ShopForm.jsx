import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const ShopForm = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    shopkeeperName: '',
    address: '',
    shopImage: null, // Store the file object directly
  });

  const [redirect , setRedirect] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, shopImage: e.target.files[0] }); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('shopName', formData.shopName);
    data.append('shopkeeperName', formData.shopkeeperName);
    data.append('address', formData.address);
    data.append('shopImage', formData.shopImage); // Append the file object

    try {
      await axios.post('http://localhost:3000/shop', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setRedirect(true);
      alert('Shop created successfully!');
    } catch (error) {
      console.error('Error creating shop:', error);
      alert('Failed to create shop. Please try again.');
    }
  };
  if(redirect) return <Navigate to={'/shop'} />
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Shop</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Shop Name</label>
            <input type="text" name="shopName" placeholder="Shop Name" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Shopkeeper Name</label>
            <input type="text" name="shopkeeperName" placeholder="Shopkeeper Name" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Address</label>
            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Shop Image</label>
            <input type="file" name="shopImage" onChange={handleImageChange} accept="image/*" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopForm;
