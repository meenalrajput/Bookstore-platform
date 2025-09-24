import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    img: Book1,
    title: "His Life",
    description: "An inspiring story about resilience and courage.",
    rating: 4.8,
    price: 299,
  },
  {
    id: 2,
    img: Book2,
    title: "Who's There",
    description: "A thrilling novel that keeps you on the edge of your seat.",
    rating: 5.0,
    price: 349,
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description: "A gripping adventure filled with mystery and suspense.",
    rating: 4.7,
    price: 399,
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <div className="py-14 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center mb-10">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Trending Now
        </p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Best Books
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs max-w-[500px] mx-auto mt-2">
          Explore the most popular books chosen by our readers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {servicesData.map((book) => (
          <div
            key={book.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:scale-105 duration-300 flex flex-col items-center"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-[150px] h-[220px] object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-center">{book.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center line-clamp-2">
              {book.description}
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`text-yellow-500 ${
                    idx < Math.floor(book.rating)
                      ? ""
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {book.rating.toFixed(1)}
              </span>
            </div>
            <p className="mt-1 font-bold text-primary dark:text-secondary">
              ${book.price}
            </p>
            <button
              onClick={() => handleOrderPopup(book)}
              className="mt-3 bg-primary text-white rounded-full px-4 py-1 hover:scale-105 duration-200"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
