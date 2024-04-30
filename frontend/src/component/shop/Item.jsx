import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import { Link } from "react-router-dom";

function Item() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/allitems");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
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

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(user);
  return (
    <>
      <div className="flex flex-col items-center my-4">
        <h1 className="text-3xl font-bold mb-4">ITEMS</h1>
        <div className="flex justify-center items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-md w-3/4 focus:outline-none"
          />
          {user && (
            <Link to={'/itemform'} className="bg-green-300 px-4 py-2 rounded-md">
              Add Items
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            itemName={item.itemName}
            itemType={item.itemType}
            rate={item.rate}
            brand={item.brand}
            description={item.description}
            img_path={item.img_path}
          />
        ))}
      </div>
    </>
  );
}

export default Item;
