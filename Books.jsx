import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's There",
    rating: 5.0,
    author: "Anonymous",
    price: 299,
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John Doe",
    price: 399,
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    rating: 4.7,
    author: "Jane Doe",
    price: 349,
  },
  {
    id: 4,
    img: Book2,
    title: "Mystery Tales",
    rating: 4.4,
    author: "Someone",
    price: 450,
  },
  {
    id: 5,
    img: Book1,
    title: "Adventure Time",
    rating: 4.5,
    author: "Another Author",
    price: 299,
  },
];

const Books = ({
  handleOrderPopup,
  cartItems,
  setCartItems,
  totalPrice,
  setTotalPrice,
}) => {
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
    handleOrderPopup(true); // open popup automatically
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Top Books for You
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-400">
            Explore the most popular books available for you.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {booksData.map(({ id, img, title, rating, author, price }) => (
            <div
              key={id}
              className="space-y-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-3 hover:scale-105 duration-300"
            >
              <img
                src={img}
                alt={title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {author}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={`text-yellow-500 ${
                        idx < Math.floor(rating)
                          ? ""
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {rating.toFixed(1)}
                  </span>
                </div>
                <textarea
                  placeholder="Add notes for your order"
                  className="w-full mt-2 p-2 rounded-md border border-gray-300 dark:border-gray-600"
                  onChange={(e) => {
                    const updatedCart = cartItems.map((item) =>
                      item.title === title
                        ? { ...item, notes: e.target.value }
                        : item
                    );
                    setCartItems(updatedCart);
                  }}
                />
                <button
                  className="bg-primary text-white py-1 px-4 rounded-full mt-2 w-full hover:scale-105 duration-200"
                  onClick={() => handleAddToCart({ title, price })}
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
