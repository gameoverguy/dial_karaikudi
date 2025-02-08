/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";

const Card_01 = ({ image, name, title }) => {
  return (
    <div className="flex flex-col justify-center rounded-xl items-center gap-6 py-8 px-10 shadow-xl">
      <img className="h-24" src={image} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-700 text-lg font-bold font-title">{name}</h1>
        <p className="text-blue-700 text-sm font-bold font-title">{title}</p>
      </div>
      <p className="text-gray-400 text-sm font-title text-center">
        Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
        bibendum auctor consequat ipsum nec sagittis vulputate cursus a sit amet
        mauris morbi.
      </p>
      <div className="flex gap-2">
        <Link className=" text-blue-800 text-base shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer">
          <FaFacebook />
        </Link>
        <Link className=" text-black text-base shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer">
          <FaXTwitter />
        </Link>
        <Link className=" text-red-600 text-base shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer">
          <FaGooglePlus />
        </Link>
      </div>
    </div>
  );
};

export default Card_01;
