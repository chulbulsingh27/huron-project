import axios from "axios";
import React, { useState } from "react";

import { getProducts } from "../../constants";
const products = await getProducts();

function CardData({ cart, setCart }) {
  const [isAdded, setIsAdded] = useState(Array(products.length).fill(false));
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5046/api/Products")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (index) => {
    setIsLoading(true);
    setIsAdded((prevIsAdded) => {
      const newIsAdded = [...prevIsAdded];
      newIsAdded[index] = !newIsAdded[index];
      return newIsAdded;
    });
    // Update the cart state here
    if (isAdded[index]) {
      setCart((currentCart) =>
        currentCart.filter((item) => item.id !== searchResults[index].id)
      );
    } else {
      setCart((currentCart) => [
        ...currentCart,
        { ...searchResults[index], quantity: 1 },
      ]);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      setSearchResults(products);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const sortPriceAscending = () => {
    const sortedProducts = [...searchResults].sort((a, b) => a.price - b.price);
    setSearchResults(sortedProducts);
  };

  const sortPriceDescending = () => {
    const sortedProducts = [...searchResults].sort((a, b) => b.price - a.price);
    setSearchResults(sortedProducts);
  };

  const clearAllFilters = () => {
    setSearchResults(products); // reset products to initial state
    setSearchTerm(""); // clear the search term
  };

  return (
    <div className="bg-orange-100 w-full">
      <div className="flex items-center justify-between bg-gray-400">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-gray-400 rounded-md outline-none p-2 ml-8 "
        />
        <button
          onClick={handleSearch}
          className="border-2 m-2 p-1.5 bg-blue-600 hover:bg-blue-400 rounded-md text-white"
        >
          Search
        </button>
        <button
          onClick={sortPriceAscending}
          className="border-2 m-2 p-1.5 bg-green-600 hover:bg-green-400 rounded-md text-white"
        >
          Sort Price Ascending
        </button>
        <button
          onClick={sortPriceDescending}
          className="border-2 m-2 p-1.5 bg-red-600 hover:bg-red-400 rounded-md text-white"
        >
          Sort Price Descending
        </button>
        <button
          onClick={clearAllFilters}
          className="border-2 m-2 p-1.5 bg-[#440a5e] hover:bg-[#7f4699] rounded-md text-white"
        >
          Clear All Filters
        </button>
      </div>
      <div className="flex flex-wrap ">
        {searchResults.map((product, index) => (
          <div key={product.id} className="w-1/4 p-4 m-2">
            <div className="border border-gray-500 rounded-lg p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">Price: Rs.{product.price}</p>
              <p className="text-gray-600">Discount: {product.discount} </p>
              <button
                className={`w-full p-2 mt-4 border rounded ${
                  isAdded[index]
                    ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                    : "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                }`}
                onClick={() => handleClick(index)}
              >
                {isLoading[index] ? (
                  <span>Loading...</span>
                ) : isAdded[index] ? (
                  "Remove from cart"
                ) : (
                  "Add to cart"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardData;
