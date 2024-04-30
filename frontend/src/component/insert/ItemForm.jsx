import React, { useState } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom'

const ItemForm = () => {
  const [formData, setFormData] = useState({
    shopId: '',
    itemName: '',
    itemType: '',
    rate: '',
    brand: '',
    description: '',
    itemImage: null, // Store the file object directly
  });
  
  const [redirect , setRedirect] = useState(false)
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, itemImage: e.target.files[0] }); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('shopId', formData.shopId);
    data.append('itemName', formData.itemName);
    data.append('itemType', formData.itemType);
    data.append('rate', formData.rate);
    data.append('brand', formData.brand);
    data.append('description', formData.description);
    data.append('itemImage', formData.itemImage); // Append the file object

    try {
      await axios.post('http://localhost:3000/item', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setRedirect(true)
      alert('Item created successfully!');
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Failed to create item. Please try again.');
    }
  };
  if(redirect) return <Navigate to={'/item'} />
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Shop ID</label>
            <input type="text" name="shopId" placeholder="Shop ID" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Item Name</label>
            <input type="text" name="itemName" placeholder="Item Name" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Item Type</label>
            <input type="text" name="itemType" placeholder="Item Type" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Rate</label>
            <input type="number" name="rate" placeholder="Rate" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Brand</label>
            <input type="text" name="brand" placeholder="Brand" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Description</label>
            <input type="text" name="description" placeholder="Description" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Item Image</label>
            <input type="file" name="itemImage" onChange={handleImageChange} accept="image/*" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
