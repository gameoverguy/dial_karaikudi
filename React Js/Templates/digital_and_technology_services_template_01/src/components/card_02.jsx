/* eslint-disable react/prop-types */

const Card_02 = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center px-4 py-3">
      <div className="text-4xl text-green-700">{icon}</div>
      <div className="text-3xl text-center text-blue-800">{title}</div>
      <div className="w-10/12 text-center md:text-center px-3 py-4 text-base text-gray-400">
        {desc}
      </div>
    </div>
  );
};

export default Card_02;
