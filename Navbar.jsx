import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Best Seller", link: "/#services" },
];

const DropdownLinks = [
  { name: "Trending Books", link: "/#" },
  { name: "Best Selling", link: "/#" },
  { name: "Authors", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-0">
        {/* Left: Logo + Text */}
        <a
          href="#"
          className="font-bold text-2xl sm:text-3xl flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <img src={Logo} alt="Logo" className="w-10" />
          Bookstore
        </a>

        {/* Right: Menu + DarkMode + Order Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <DarkMode />

          {/* Menu Links */}
          <ul className="hidden sm:flex items-center gap-4">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="relative inline-block py-4 px-3 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-secondary font-medium transition-colors duration-300"
                >
                  {menu.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary dark:bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              <a
                href="/#"
                className="flex items-center gap-1 py-4 px-3 text-gray-800 dark:text-gray-200 font-medium hover:text-primary dark:hover:text-secondary transition-colors duration-300"
              >
                Quick Links
                <FaCaretDown className="transition-transform duration-300 group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg p-2">
                <ul className="space-y-2">
                  {DropdownLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.link}
                        className="block w-full rounded-md p-2 text-gray-800 dark:text-gray-200 hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Order Button */}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            Order <FaCartShopping className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
