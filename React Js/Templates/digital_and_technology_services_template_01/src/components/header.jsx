/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="sticky top-0 z-100">
      <div className="md:px-16 bg-linear-to-r from-blue-700 to-teal-500 flex justify-between items-center h-24">
        <span className="text-4xl text-white font-bold font-logo pl-8">
          Digitaly
        </span>
        {isOpen ? (
          <div
            onClick={() => handleMenu()}
            className="block md:hidden text-4xl text-white pr-8 cursor-pointer"
          >
            <IoClose />
          </div>
        ) : (
          <div
            onClick={() => handleMenu()}
            className="block md:hidden text-4xl text-white pr-8 cursor-pointer"
          >
            <IoMenu />
          </div>
        )}

        {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}

        <ul className="hidden md:flex justify-evenly gap-2">
          <Link
            to="/home"
            className="font-logo px-4 py-3 text-gray-200 text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-logo px-4 py-3 text-gray-200 text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="/templates"
            className="font-logo px-4 py-3 text-gray-200 text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Website Templates
          </Link>
          <Link
            to="/support"
            className="font-logo px-4 py-3 text-gray-200 text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Support
          </Link>
          <Link
            to="/pricing"
            className="font-logo px-4 py-3 text-gray-200 text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="/contactus"
            className="font-logo px-4 py-3 text-gray-200 text-lg hover:bg-blue-800 rounded-lg cursor-pointer"
          >
            Contact us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export const MobileNavbar = ({ setIsOpen }) => {
  return (
    <ul className="fixed top-24 w-full flex flex-col justify-evenly items-center bg-gray-800/95">
      <Link
        onClick={() => setIsOpen(false)}
        to="/home"
        className="py-3 w-full text-gray-200 text-base text-center hover:bg-blue-800 cursor-pointer"
      >
        Home
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        to="/about"
        className="py-3 w-full text-gray-200 text-base text-center hover:bg-blue-800 cursor-pointer"
      >
        About
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/templates"
        className="py-3 w-full text-gray-200 text-base text-center hover:bg-blue-800 cursor-pointer"
      >
        Website Templates
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/support"
        className="py-3 w-full text-gray-200 text-base text-center hover:bg-blue-800 cursor-pointer"
      >
        Support
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/pricing"
        className="py-3 w-full text-gray-200 text-base text-center hover:bg-blue-800 cursor-pointer"
      >
        Pricing
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to="/contactus"
        className="py-3 w-full text-gray-200 text-base text-center hover:bg-blue-800 cursor-pointer"
      >
        Contact
      </Link>
    </ul>
  );
};

export default Header;
