import React, { useState } from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Who's There",
    description: "A thrilling novel that keeps you on the edge of your seat.",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    description: "An inspiring story about resilience and courage.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description: "A gripping adventure filled with mystery and suspense.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [active, setActive] = useState(ImageList[0]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      className="min-h-[650px] flex justify-center items-center relative bg-gray-50 dark:bg-gray-950 duration-200"
      style={bgImage}
    >
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
        {/* Text Section */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary dark:text-secondary">
            {active.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {active.description}
          </p>
          <button
            onClick={handleOrderPopup}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:scale-105 duration-300"
          >
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center relative">
          <div className="w-[300px] sm:w-[450px] h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={active.img}
              alt={active.title}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* Thumbnail Selector */}
          <div className="flex gap-4 mt-4">
            {ImageList.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.title}
                onClick={() => setActive(item)}
                className={`w-20 h-28 object-cover rounded-lg cursor-pointer border-4 ${
                  active.id === item.id
                    ? "border-primary dark:border-secondary"
                    : "border-gray-300 dark:border-gray-700"
                } hover:scale-110 transition duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
