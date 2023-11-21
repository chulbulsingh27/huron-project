import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    modelName: "",
    price: 0,
    offersAndDiscounts: 0,
    customerCareSupport: "",
    cancelAndReturnPolicy: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5046/api/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = () => {
    axios
      .post("http://localhost:5046/api/Products", newProduct)
      .then(() => {
        getProducts();
        setNewProduct({
          modelName: "",
          price: 0,
          offersAndDiscounts: 0,
          customerCareSupport: "",
          cancelAndReturnPolicy: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:5046/api/Products/${productId}`)
      .then(() => {
        getProducts(); 
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const updateProduct = () => {
    if (selectedProduct) {
      axios
        .put(
          `http://localhost:5046/api/Products/${selectedProduct.productId}`,
          newProduct
        )
        .then(() => {
          getProducts(); 
          setNewProduct({
            modelName: "",
            price: 0,
            offersAndDiscounts: 0,
            customerCareSupport: "",
            cancelAndReturnPolicy: "",
          });
          setSelectedProduct(null); 
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      setNewProduct({
        modelName: selectedProduct.modelName,
        price: selectedProduct.price,
        offersAndDiscounts: selectedProduct.offersAndDiscounts,
        customerCareSupport: selectedProduct.customerCareSupport,
        cancelAndReturnPolicy: selectedProduct.cancelAndReturnPolicy,
      });
    }
  }, [selectedProduct]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Add Product Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Model Name
            </label>
            <input
              type="text"
              name="modelName"
              value={newProduct.modelName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Offers and Discounts
            </label>
            <input
              type="number"
              name="offersAndDiscounts"
              value={newProduct.offersAndDiscounts}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Customer Care Support
            </label>
            <input
              type="text"
              name="customerCareSupport"
              value={newProduct.customerCareSupport}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cancel and Return Policy
            </label>
            <input
              type="text"
              name="cancelAndReturnPolicy"
              value={newProduct.cancelAndReturnPolicy}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="button"
            onClick={addProduct}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product List Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Product List</h2>
        <table className="min-w-full border border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Model Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Offers and Discounts</th>
              <th className="border p-2">Customer Care Support</th>
              <th className="border p-2">Cancel and Return Policy</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border p-2">{product.productId}</td>
                <td className="border p-2">{product.modelName}</td>
                <td className="border p-2">{product.price}</td>
                <td className="border p-2">{product.offersAndDiscounts}</td>
                <td className="border p-2">{product.customerCareSupport}</td>
                <td className="border p-2">{product.cancelAndReturnPolicy}</td>
                <td className="border p-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.productId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
