/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-teal-500">
      <div className="md:px-16 flex justify-between items-center h-20 px-8">
        {/* Logo */}
        <span className="text-4xl text-white font-bold font-logo">
          Digitaly
        </span>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-4">
          <NavLinks />
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-4xl text-white cursor-pointer"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden absolute left-0 top-full w-full bg-gray-800 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavLinks setIsOpen={setIsOpen} mobile />
      </nav>
    </header>
  );
};

const NavLinks = ({ setIsOpen, mobile = false }) => {
  const links = [
    { name: "Home", path: "/home" },
    { name: "About us", path: "/about" },
    { name: "Website Templates", path: "/templates" },
    { name: "Support", path: "/support" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contactus" },
  ];

  return (
    <ul
      className={`flex flex-col ${mobile ? "items-center" : "flex-row"} w-full`}
    >
      {links.map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          className={`${
            mobile
              ? "py-3 w-full text-center hover:bg-blue-800"
              : "px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-lg"
          }`}
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          {name}
        </Link>
      ))}
    </ul>
  );
};

export default Header;
