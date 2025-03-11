import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import DynamicIframe from "./iFrame";

function Card({ children }) {
  return <div className="bg-white shadow-lg rounded-lg p-4">{children}</div>;
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

function Button({ children, className = "", onClick }) {
  return (
    <button
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className="fixed -z-10 top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/bg6.jpg')",
          transform: "scaleX(-1)",
        }}
      ></div>

      <header className="fixed w-full bg-white/30 backdrop-blur-lg shadow-lg p-4 flex justify-between items-center z-50">
        <img src="/Images/Logo1 - Icon.png" alt="Logo" className="h-12" />
        <nav className="hidden md:flex space-x-6">
          <Link to="home" smooth className="cursor-pointer font-bold">
            Home
          </Link>
          <Link to="services" smooth className="cursor-pointer font-bold">
            Services
          </Link>
          <Link to="about" smooth className="cursor-pointer font-bold">
            About
          </Link>
          <Link to="contact" smooth className="cursor-pointer font-bold">
            Contact Us
          </Link>
        </nav>
        <button className="md:hidden text-lg" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      {isMenuOpen && (
        <div className="absolute top-16 w-full bg-white shadow-lg flex flex-col items-center p-4 space-y-4">
          <Link to="home" smooth onClick={toggleMenu}>
            Home
          </Link>
          <Link to="services" smooth onClick={toggleMenu}>
            Services
          </Link>
          <Link to="about" smooth onClick={toggleMenu}>
            About
          </Link>
          <Link to="contact" smooth onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}

      <main className="flex flex-col gap-12 items-center text-center h-fit py-32">
        <div className="w-fit h-fit">
          <DynamicIframe />
        </div>

        <section
          id="services"
          className="w-6/12 p-6 bg-white/70 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            Boost your business through our Hyper-local Multi-vendor
            Multi-delivery e-Commerce platform.
          </h2>
          <p className="text-lg text-green-700 font-semibold">
            Launching Soon...
          </p>
          <div className="flex justify-center space-x-10 mt-6">
            <Card>
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src="/Images/p1.png"
                  alt="Products"
                  className="w-20 h-20"
                />
                <p className="font-semibold mt-2">Products</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src="/Images/s1.png"
                  alt="Services"
                  className="w-20 h-20"
                />
                <p className="font-semibold mt-2">Services</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="about"
          className="w-6/12 h-fit p-6 bg-white/70 rounded-xl shadow-lg"
        >
          <p className="text-lg">
            Discover Lifestyle at Your Fingertips! DialKaraikudi brings you the
            best of local products, trusted business listings, genuine reviews,
            and seamless online services. Shop smarter, explore deeper, and
            connect with Karaikudi’s rich heritage—all in one convenient
            platform. Your gateway to convenience starts here.
          </p>
          <Button className="mt-4">Subscribe</Button>
        </section>
      </main>

      <footer
        id="contact"
        className="w-full bg-gray-900 text-white p-6 flex flex-col items-center space-y-4"
      >
        <h3 className="text-lg font-semibold">Connect With Us</h3>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/dialkaraikudi/" target="_blank">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/dialkaraikudi/" target="_blank">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dial-karaikudi-60a43133b/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:admin@dialkaraikudi.com">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/9965480680" target="_blank">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p>
          No.7, Muthoorani East, Karaikudi - 630001. Landmark: Near New Cinema
          Theatre & Vidhya Giri School.
        </p>
        <p>Email: admin@dialkaraikudi.com | Contact: 99654 80680</p>
      </footer>
    </>
  );
}
