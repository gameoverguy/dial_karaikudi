/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close mobile menu when switching to desktop view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-100 drop-shadow-lg w-full">
      <div className="px-6 lg:px-16 bg-linear-to-r from-blue-700 to-teal-500 flex justify-between items-center h-20 w-full">
        <Link to="/home">
          <span className="text-4xl text-white font-bold text-center mb-3 font-logo">
            Digitaly
          </span>
        </Link>

        <div className="flex justify-center">
          {isOpen ? (
            <div
              onClick={() => handleMenu()}
              className="block md:hidden text-4xl text-white cursor-pointer"
            >
              <IoClose />
            </div>
          ) : (
            <div
              onClick={() => handleMenu()}
              className="block md:hidden text-4xl text-white cursor-pointer"
            >
              <IoMenu />
            </div>
          )}
        </div>

        {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}

        <ul className="hidden md:flex justify-between items-center gap-2">
          <Link
            to="/home"
            className="font-logo px-4 py-3 text-gray-200 text-sm lg:text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-logo px-4 py-3 text-gray-200 text-sm lg:text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="/templates"
            className="font-logo px-4 py-3 text-gray-200 text-sm lg:text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Templates
          </Link>
          <Link
            to="/support"
            className="font-logo px-4 py-3 text-gray-200 text-sm lg:text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Support
          </Link>
          <Link
            to="/pricing"
            className="font-logo px-4 py-3 text-gray-200 text-sm lg:text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="/contactus"
            className="font-logo px-4 py-3 text-gray-200 text-sm lg:text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Contact us
          </Link>
          <Link
            to="/login"
            className="font-logo px-4 py-3 bg-gray-500 text-gray-200 text-sm lg:text-lg hover:bg-red-800 rounded-lg cursor-pointer"
          >
            LogOut
          </Link>
        </ul>
      </div>
    </div>
  );
};

export const MobileNavbar = ({ setIsOpen }) => {
  return (
    <ul className="absolute left-0 top-full w-full flex flex-col justify-evenly items-center bg-gray-800/95">
      <Link
        onClick={() => setIsOpen(false)}
        to="/home"
        className="flex justify-start items-center px-4 py-3 w-full hover:bg-blue-800 cursor-pointer "
      >
        <span className="text-gray-200 text-base">Home</span>
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        to="/about"
        className="flex justify-start items-center px-4 py-3 w-full hover:bg-blue-800 cursor-pointer"
      >
        <span className="text-gray-200 text-base">About</span>
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/templates"
        className="flex justify-start items-center px-4 py-3 w-full hover:bg-blue-800 cursor-pointer"
      >
        <span className="text-gray-200 text-base">Website Templates</span>
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/support"
        className="flex justify-start items-center px-4 py-3 w-full hover:bg-blue-800 cursor-pointer"
      >
        <span className="text-gray-200 text-base">Support</span>
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/pricing"
        className="flex justify-start items-center px-4 py-3 w-full hover:bg-blue-800 cursor-pointer"
      >
        <span className="text-gray-200 text-base">Pricing</span>
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/contactus"
        className="flex justify-start items-center px-4 py-3 w-full hover:bg-blue-800 cursor-pointer"
      >
        <span className="text-gray-200 text-base">Contact</span>
      </Link>
    </ul>
  );
};

export default Header;
