import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Company Details */}
          <div className="space-y-4">
            <h1 className="flex items-center gap-3 text-2xl font-bold">
              <img src={footerLogo} alt="Logo" className="w-10" />
              Bookstore
            </h1>
            <p>
              Discover your next favorite book with us. Books for every mood,
              genre, and reader.
            </p>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <span>Noida, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <span>+91 123456789</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:col-span-2">
            {["Important Links", "Links", "Location"].map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-lg font-semibold">{section}</h2>
                <ul className="flex flex-col gap-2">
                  {FooterLinks.map((link, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      {link.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 border-t border-white/30 pt-6 text-sm">
          &copy; 2024 All rights reserved 
        </div>
      </section>
    </div>
  );
};

export default Footer;
