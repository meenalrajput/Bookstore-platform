import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const OrderPopup = ({ orderPopup, setOrderPopup, cartItems, setCartItems }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + (item.price || 299) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // Remove if quantity becomes 0
    }
    setCartItems(updatedCart);
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleOrder = async () => {
    if (!name || !email || !address) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      name,
      email,
      address,
      items: cartItems.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price || 299,
      })),
      totalAmount: totalPrice,
    };

    try {
      const res = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();
      alert(data.message || "Order placed successfully!");

      // Reset popup and form
      setOrderPopup(false);
      setCartItems([]);
      setName("");
      setEmail("");
      setAddress("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong! Try again.");
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-bold">Your Order</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Cart Items */}
            <div className="mb-4">
              {cartItems.length === 0 && <p>Your cart is empty.</p>}
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-2 border-b border-gray-200 pb-1"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      Price: ₹{item.price || 299}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(idx)}
                      className="bg-gray-200 dark:bg-gray-700 px-2 rounded"
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(idx)}
                      className="bg-gray-200 dark:bg-gray-700 px-2 rounded"
                    >
                      <FaPlus />
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="text-red-500 ml-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}

              {cartItems.length > 0 && (
                <div className="flex justify-between font-bold mt-2 border-t border-gray-300 pt-2">
                  <span>Total:</span>
                  <span>₹{totalPrice}</span>
                </div>
              )}
            </div>

            {/* User Details */}
            <div className="flex flex-col gap-3 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full"
                onClick={handleOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
