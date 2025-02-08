/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SectionTemplate_01 = ({
  sectionTitle,
  sectionDesc,
  sectionButtonLabel,
  sectionLink,
}) => {
  return (
    <div className="flex flex-col justify-between items-center gap-16 py-8">
      <div className="text-white/80 text-3xl text-center font-bold font-title">
        {sectionTitle}
      </div>
      <div className="text-white/70 text-base text-center font-title px-12 md:px-8">
        {sectionDesc}
      </div>
      {sectionButtonLabel ? (
        <Link
          to={sectionLink}
          className="w-fit px-8 py-4 bg-blue-800 text-white/60 rounded-4xl shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
        >
          {sectionButtonLabel}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionTemplate_01;
