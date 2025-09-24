import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const location = useLocation();
  const { orderDetails } = location.state || { orderDetails: {} }; // Extract order details from the location state

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
      {orderDetails.items && orderDetails.items.length > 0 ? (
        <div>
          <h2 className="text-2xl mb-2">Items Ordered:</h2>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index} className="mb-2">
                {item.title} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <h3 className="text-xl mt-4">Total Amount: ${orderDetails.totalAmount}</h3>
        </div>
      ) : (
        <p>No items in your order.</p>
      )}
    </div>
  );
};

export default OrderSummary;
