import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
function Cart({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);
  //const [orderId, setOrderId] = useState(null);
  const [userId, setUserId] = useState(1);
  const [productId, setProductId] = useState(1);
  //const [orderDate, setOrderDate] = useState(null);
  //const [totalAmount, setTotalAmount] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };
  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };
  const totalPrice = cart
    .reduce((total, item) => total + item.price * (1 - 0.1) * item.quantity, 0)
    .toFixed(2);
  // const handlePayNow = () => {
  //   if (totalPrice > 0) {
  //     setShowModal(true);
  //   } else {
  //     alert("Nothing is in your cart. Add something to your cart.");
  //   }
  // };

  const handlePayNow = async () => {
    if (totalPrice > 0) {
      try {
        const response = await axios.post("http://localhost:5046/api/Orders", {
          UserId: userId,
          ProductId: productId,
          Quantity: quantity,
        });

        console.log("Order created successfully");
        setShowModal(true);
        //setOrderId(response.data.OrderId);
        setUserId(response.data.UserId);
        setProductId(response.data.ProductId);
        //setOrderDate(response.data.OrderDate);
        //setTotalAmount(response.data.TotalAmount);
        setQuantity(response.data.Quantity);
      } catch (error) {
        console.error(
          "Error:",
          error.response.status,
          error.response.statusText,
          error.response.data
        );
      }
    } else {
      alert("Nothing is in your cart. Add something to your cart.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-[700px] bg-[#3b82f6] rounded-md">
      {cart.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex items-center justify-between w-full align-center space-y-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-white font-bold text-xl ml-10">{item.name}</h3>
          <p className="text-white font-semibold text-xl">${item.price}</p>
          <button
            onClick={() => handleIncrement(index)}
            className=" bg-green-500 text-white px-2 py-1 rounded"
          >
            +
          </button>
          <p className="text-white text-xl ">{item.quantity}</p>
          <button
            onClick={() => handleDecrement(index)}
            className="bg-red-500 text-white px-2 py-1 rounded mr-8"
          >
            -
          </button>
        </motion.div>
      ))}
      <h2 className="text-white mt-6 text-2xl">Total price: Rs.{totalPrice}</h2>
      <button
        onClick={handlePayNow}
        className="mt-4 bg-blue-800 text-white px-4 py-2 rounded-md border-2 border-blue-800"
      >
        Pay Now
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#555b96] p-4 rounded shadow-lg w-[800px] h-[200px] items-center justify-center text-white">
            <h2 className="text-2xl mb-4 text-center ">
              Order Placed Successfully
            </h2>
            <p className="text-center">Thanks for shopping with us!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
