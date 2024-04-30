import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

function Item() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  }, []);

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <h1 className="text-3xl font-bold mb-4">ITEMS</h1>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border w-1/2 border-gray-200 rounded-md mb-10" 
        />
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
