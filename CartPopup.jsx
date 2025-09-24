import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const CartPopup = ({
  cartPopup,
  setCartPopup,
  cartItems,
  setCartItems,
  totalPrice,
  setTotalPrice,
}) => {
  const handleRemoveItem = (title) => {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCart);
    setTotalPrice(
      updatedCart.reduce(
        (sum, item) => sum + (item.price || 299) * item.quantity,
        0
      )
    );
  };

  const handleQuantityChange = (title, qty) => {
    const updatedCart = cartItems.map((item) =>
      item.title === title ? { ...item, quantity: qty } : item
    );
    setCartItems(updatedCart);
    setTotalPrice(
      updatedCart.reduce(
        (sum, item) => sum + (item.price || 299) * item.quantity,
        0
      )
    );
  };

  return (
    <>
      {cartPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-[350px] bg-white dark:bg-gray-900 h-full p-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Your Cart</h2>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setCartPopup(false)}
              />
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[80%]">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p>${item.price || 299}</p>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.title,
                            parseInt(e.target.value)
                          )
                        }
                        className="w-16 border rounded px-1 mt-1"
                      />
                    </div>
                    <button
                      className="text-red-500 font-bold"
                      onClick={() => handleRemoveItem(item.title)}
                    >
                      X
                    </button>
                  </div>
                ))}
                <p className="font-bold mt-4">Total: ${totalPrice}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPopup;
