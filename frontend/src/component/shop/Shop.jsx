import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import axios from "axios";
import { Link } from "react-router-dom";

function Shop() {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("http://localhost:3000/allshops");
        setShops(response.data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchShops();
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:3000/data", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.user.type === "seller") setUser(true);
        }
      } catch (error) {
        console.error("error in fetching user", error);
      }
    };
    fetchData();
  }, []);

  const filteredShops = shops.filter((shop) =>
    shop.shopName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <h1 className="text-3xl font-bold mb-4">SHOPS</h1>
        <input
          type="text"
          placeholder="Search shops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border w-1/2 border-gray-200 rounded-md mb-10"
        />
        {user && (
          <Link to={'/shopform'}
            className="bg-green-300 px-4 py-2 rounded-md"
          >
            Add Shop
          </Link>
        )}
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredShops.map((shop) => (
          <ShopCard
            key={shop._id}
            shopName={shop.shopName}
            shopkeeperName={shop.shopkeeperName}
            address={shop.address}
            shopId={shop.shopId}
            img_path={shop.img_path}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
