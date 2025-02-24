import SectionTemplate_01 from "../../components/SectionTemplate_01";

import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Websites"}
          sectionDesc={
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
          }
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-16 px-8 py-12">
        <div className="w-10/12 flex flex-col justify-between items-center gap-16 px-10 py-8">
          <div className="text-blue-600/80 text-3xl font-bold font-title">
            Bring your Business to Life Instantly
          </div>
          <div className="text-gray-500/70 text-base font-title text-center">
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
            bibendum auctor consequat ipsum nec sagittis vulputate cursus a sit
            amet mauris morbi accumsan ipsum velit.
          </div>
        </div>

        <div className="mx-auto flex flex-wrap items-center justify-center gap-16">
          <div className="w-10/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/agency.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Marketing</p>
          </div>
          <div className="w-10/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/makeup-artist.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Artist</p>
          </div>
          <div className="w-10/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/co-working-spaces.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Office Space</p>
          </div>
          <div className="w-10/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/fitness-coach.jpg"
            />
            <p className="text-base text-gray-400 font-bold">
              Fitness & Health
            </p>
          </div>
          <div className="w-10/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/official-dj.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Media</p>
          </div>
          <div className="w-10/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/sally-mark-wedding.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Event & Wedding</p>
          </div>
        </div>

        <Link
          to={"/templates"}
          className="w-fit px-8 py-4 bg-blue-800 text-white/60 rounded-4xl shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
        >
          See All our Designs
        </Link>
      </div>

      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Are You Ready to Join The Club?"}
          sectionDesc={
            "Get a free quote from one of our consultants to discuss which option would work best for your needs"
          }
          sectionButtonLabel={"Contact Us"}
          sectionLink={"/contactus"}
        />
      </div>
    </div>
  );
};

export default Templates;
