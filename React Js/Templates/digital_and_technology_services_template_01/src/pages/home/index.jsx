import { DiAndroid } from "react-icons/di";
import { LuHardDriveDownload } from "react-icons/lu";
import { FiLoader } from "react-icons/fi";

import { Link } from "react-router-dom";

import SectionTemplate_01 from "../../components/SectionTemplate_01";

const Home = () => {
  return (
    <div className="h-fit">
      <div className="bg-linear-to-r from-blue-700 to-teal-500 flex flex-col justify-between items-center gap-8 shadow-2xl">
        <div className="px-12 mt-8 w-full flex flex-col justify-center items-center py-16 gap-8">
          <h1 className="text-white/90 text-4xl font-bold font-headingXXL text-center">
            Website Design and Development
          </h1>
          <p className="text-white/70 text-lg font-title text-center">
            Enim ullamco aute velit ipsum nulla esse officia nulla cillum labore
            ut cillum ea sunt occaecat sunt voluptate ea laboris ipsum duis
            dolor sint adipisicing tempor ipsum commodo proident excepteur.
          </p>
          <button className="w-fit px-8 py-4 bg-blue-800 text-white/60 rounded-4xl shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer">
            Choose a Design
          </button>
        </div>

        {/* <img src="/images/hero-section.png" /> */}
      </div>
      <img className="shadow-2xl" src="/images/hero.jpg" />

      <div className="flex flex-col gap-12 py-16 justify-center items-center">
        <div className="text-4xl text-blue-800">veniam fugiat aliqua</div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-green-700">
              <DiAndroid />
            </div>
            <div className="text-3xl text-blue-800">fugiat aliqua</div>
            <div className="w-8/12 text-center md:text-left md:w-80 px-3 py-4 text-base text-gray-400">
              Qui id consectetur pariatur velit ea laboris id culpa labore elit
              quis elit nostrud et do et veniam fugiat aliqua.
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-cyan-600">
              <LuHardDriveDownload />
            </div>
            <div className="text-3xl text-blue-800">veniam fugiat</div>

            <div className="w-8/12 text-center md:text-left md:w-80 px-3 py-4 text-base text-gray-400">
              Qui id consectetur pariatur velit ea laboris id culpa labore elit
              quis elit nostrud et do et veniam fugiat aliqua.
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-yellow-400">
              <FiLoader />
            </div>
            <div className="text-3xl text-blue-800">consectetur</div>
            <div className="w-8/12 text-center md:text-left md:w-80 px-3 py-4 text-base text-gray-400">
              Qui id consectetur pariatur velit ea laboris id culpa labore elit
              quis elit nostrud et do et veniam fugiat aliqua.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 py-12">
        <SectionTemplate_01
          sectionTitle={"Labore consequat et proident sit ea tempor ex"}
          sectionDesc={
            "Laborum cillum non laboris sint duis id et nisi Lorem voluptate labore fugiat ex consequat cillum incididunt reprehenderit ipsum adipisicing."
          }
          sectionButtonLabel={"Choose a Design"}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-16 px-8 py-12">
        <div className="flex flex-col justify-between items-center gap-16 px-10 py-8">
          <div className="text-blue-600/80 text-3xl text-center font-bold font-title">
            Labore consequat et proident sit ea tempor ex.
          </div>
          <div className="text-blue-500/70 text-base font-title text-center">
            Laborum cillum non laboris sint duis id et nisi Lorem voluptate
            labore fugiat ex consequat cillum incididunt reprehenderit ipsum
            adipisicing.
          </div>
        </div>

        <div className="mx-auto flex flex-wrap items-center justify-center gap-16">
          <div className="w-5/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/agency.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Marketing</p>
          </div>
          <div className="w-5/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/makeup-artist.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Artist</p>
          </div>
          <div className="w-5/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/co-working-spaces.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Office Space</p>
          </div>
          <div className="w-5/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/fitness-coach.jpg"
            />
            <p className="text-base text-gray-400 font-bold">
              Fitness & Health
            </p>
          </div>
          <div className="w-5/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
            <img
              className="shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              src="/images/official-dj.jpg"
            />
            <p className="text-base text-gray-400 font-bold">Media</p>
          </div>
          <div className="w-5/12 md:w-3/12 flex flex-col gap-8 justify-center items-center">
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
          sectionTitle={"Consectetur cillum eu deserunt cillum mollit."}
          sectionDesc={
            "Dolore commodo irure ut aliquip consequat irure sint cupidatat deserunt qui sit non velit elit sunt incididunt in ullamco laboris."
          }
          sectionButtonLabel={"Choose a Template"}
        />
      </div>

      <div className="flex flex-col gap-16 justify-center items-center py-16">
        <div className="px-8 text-3xl text-blue-700">
          Aute ad elit officia sunt officia.
        </div>
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
          <div className="w-10/12 md:w-3/12 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-right">
                cupidatat consectetur
              </h1>
              <p className="text-base text-gray-500 text-center md:text-right">
                Velit eu ea ipsum duis adipisicing ullamco elit eiusmod commodo
                exercitation exercitation ullamco sit nisi eu nisi nisi minim
                aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-right">
                cillum duis
              </h1>
              <p className="text-base text-gray-500 text-center md:text-right">
                Velit eu ea ipsum duis adipisicing ullamco elit eiusmod commodo
                exercitation exercitation ullamco sit nisi eu nisi nisi minim
                aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-right">
                ex consequat
              </h1>
              <p className="text-base text-gray-500 text-center md:text-right">
                Velit eu ea ipsum duis adipisicing ullamco elit eiusmod commodo
                exercitation exercitation ullamco sit nisi eu nisi nisi minim
                aliqua.
              </p>
            </div>
          </div>

          <img className="h-[600px]" src="/images/agency-graphic.png" />

          <div className="w-10/12 md:w-3/12 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-left">
                anim reprehenderit
              </h1>
              <p className="text-base text-gray-500 text-center md:text-left">
                Velit eu ea ipsum duis adipisicing ullamco elit eiusmod commodo
                exercitation exercitation ullamco sit nisi eu nisi nisi minim
                aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-left">
                sint sunt
              </h1>
              <p className="text-base text-gray-500 text-center md:text-left">
                Velit eu ea ipsum duis adipisicing ullamco elit eiusmod commodo
                exercitation exercitation ullamco sit nisi eu nisi nisi minim
                aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-left">
                deserunt et
              </h1>
              <p className="text-base text-gray-500 text-center md:text-left">
                Velit eu ea ipsum duis adipisicing ullamco elit eiusmod commodo
                exercitation exercitation ullamco sit nisi eu nisi nisi minim
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-12 py-8">
        <h1 className="text-3xl text-blue-800 font-bold">
          Feedbacks and Reviews
        </h1>
        <div className="flex justify-center items-center gap-12 w-10/12 mx-auto">
          <div className="flex flex-col justify-center items-center gap-6 w-6/12">
            <img className="h-36" src="/images/1.png" />
            <p className="text-base text-gray-500 text-center">
              “Sit dolore non id ex velit dolore in pariatur aute nisi duis
              culpa laborum irure culpa qui exercitation consequat
              reprehenderit.”
            </p>
            <div>
              <h1 className="text-xl text-blue-800 text-center">
                exercitation sit
              </h1>
              <p className="text-lg text-blue-800 text-center">Plumber</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 w-6/12">
            <img className="h-36" src="/images/3.png" />
            <p className="text-base text-gray-500 text-center">
              “Sit dolore non id ex velit dolore in pariatur aute nisi duis
              culpa laborum irure culpa qui exercitation consequat
              reprehenderit.”
            </p>
            <div>
              <h1 className="text-xl text-blue-800 text-center">
                exercitation sit
              </h1>
              <p className="text-lg text-blue-800 text-center">Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Nisi sunt Lorem excepteur velit ut mollit incididunt."}
          sectionDesc={
            "Incididunt non irure pariatur ad mollit fugiat fugiat fugiat quis ut nisi qui nostrud ullamco adipisicing velit proident velit Lorem."
          }
          sectionButtonLabel={"Contact Us"}
          sectionLink={"/contactus"}
        />
      </div>
    </div>
  );
};

export default Home;
