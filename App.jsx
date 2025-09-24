import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import OrderPopup from "./components/OrderPopup/OrderPopup";
import Footer from "./components/Footer/Footer";
function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // Add book to cart
  const handleAddToCart = (book) => {
    const existing = cartItems.find((item) => item.title === book.title);
    if (existing) {
      const updatedCart = cartItems.map((item) =>
        item.title === book.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
    setTotalPrice((prev) => prev + (book.price || 299));
    // default price
    setOrderPopup(true);
    // open popup automatically
  };
  return (
    <div className="App">
      {" "}
      <Navbar handleOrderPopup={() => setOrderPopup(true)} />
      <Hero handleOrderPopup={(book) => handleAddToCart(book)} />
      <Services handleOrderPopup={(book) => handleAddToCart(book)} />
      <Testimonial />
      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
      <Footer></Footer>
    </div>
  );
}
export default App;
