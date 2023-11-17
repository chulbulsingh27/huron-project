import axios from "axios";
import React, { useState } from "react";
import "./Translate.css";

import { getProducts } from "../../constants";
import NotFound from "./NotFound";
const products = await getProducts();
function CardData({ cart, setCart }) {
  const [isAdded, setIsAdded] = useState(Array(products.length).fill(false));
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isDataFound, setIsDataFound] = useState(true);

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
  // added today
  const handleSearch = () => {
    if (searchTerm === "") {
      setSearchResults(products);
      setIsDataFound(true);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setIsDataFound(results.length !== 0);
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
      <p className="text-sm text-center py-4 bg-gray-300 text-black">
        <span className="font-bold text-2xl">
          Treat yourself to a new Mobile Phone
        </span>
        <br />
        <p className="text-sm text-center py-8 bg-gray-300 text-black font-serif">
          <span className="block text-4xl font-bold mb-4">
            Discover a New World with Our Mobile Phones
          </span>
          <span className="block text-lg">
            Experience the convenience at your fingertips! Whether it's work,
            socializing, booking a ride, playing games, listening to music,
            watching your favorite shows, taking a photo, or making a call — our
            Mobile Phones from Croma do it all and then some.
          </span>
        </p>
      </p>
      <div
        className="text-2xl font-bold text-orange-700 italic"
        style={{
          animation: "moveLeftToRight 14s linear infinite", // Customize the animation duration and other properties
        }}
      >
        Hurry Up! If you order early, you will get a free tempered glass, and
        home delivery is available.
      </div>

      <div className="flex items-center justify-between bg-gray-400">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-gray-400 rounded-md outline-none p-2 ml-6"
          />
          <button
            onClick={handleSearch}
            className="border-2 m-2 p-1.5 bg-gray-600 hover:bg-blue-400 rounded-md text-white"
          >
            Search
          </button>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={sortPriceAscending}
            className="border-2 p-1.5 mr-4 bg-gray-600 hover:bg-blue-400 rounded-md text-white"
          >
            Sort Price Ascending
          </button>
          <button
            onClick={sortPriceDescending}
            className="border-2 p-1.5 mr-2 bg-gray-600 hover:bg-blue-400 rounded-md text-white"
          >
            Sort Price Descending
          </button>
          <button
            onClick={clearAllFilters}
            className="border-2 p-1.5 bg-gray-600 hover:bg-blue-400 rounded-md text-white "
          >
            Clear All Filters
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {isDataFound ? (
          searchResults.map((product, index) => (
            <div
              key={product.id}
              className="w-[300px] p-4 m-2  space-x-4 space-y-4"
            >
              <div className="border border-gray-500 rounded-lg p-4 transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110 bg-green-200 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover rounded-lg bg-slate-500"
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
          ))
        ) : (
          <NotFound/>
        )}
      </div>
    </div>
  );
}
export default CardData;
