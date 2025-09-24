import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Amazing collection of books! Loved the quick delivery and great service.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "The bookstore interface is modern and easy to use. Highly recommended.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "Excellent customer support and amazing book collection. Five stars!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 bg-gray-100 dark:bg-gray-950">
      <div className="container text-center mb-10">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          What our readers say
        </p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Read feedback from our happy customers.
        </h1>
       
      </div>

      <Slider {...settings} className="max-w-[900px] mx-auto">
        {testimonialData.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 duration-300">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {item.text}
              </p>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
