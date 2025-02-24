import SectionTemplate_01 from "../../components/SectionTemplate_01";
import { FiLoader } from "react-icons/fi";
import { DiAndroid } from "react-icons/di";
import { LuHardDriveDownload } from "react-icons/lu";
import Faq from "../../components/faq";

const Support = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Support"}
          sectionDesc={
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
          }
        />
      </div>

      <div className="flex flex-col gap-12 py-16 justify-center items-center w-full">
        <div className="px-8 text-4xl text-center text-blue-800">
          All the Support You will Ever Need
        </div>
        <div className="flex flex-col flex-wrap md:flex-row md:justify-center gap-8 w-full">
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-green-700">
              <DiAndroid />
            </div>
            <div className="text-3xl text-blue-800">Tech Support</div>
            <div className="w-80 px-3 py-4 text-base text-gray-400">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
              bibendum auctor consequat ipsum nec.
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-cyan-600">
              <LuHardDriveDownload />
            </div>
            <div className="text-3xl text-blue-800">Community</div>

            <div className="w-80 px-3 py-4 text-base text-gray-400">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
              bibendum auctor consequat ipsum nec.
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-yellow-400">
              <FiLoader />
            </div>
            <div className="text-3xl text-blue-800">Monthly Q&A Call</div>
            <div className="w-80 px-3 py-4 text-base text-gray-400">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
              bibendum auctor consequat ipsum nec.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"How to Get Started?"}
          sectionDesc={
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
          }
          sectionButtonLabel={"Contact Us"}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-6 py-12">
        <h1 className="text-3xl text-blue-800">Have a Question?</h1>
        <p className="w-9/12 text-base text-gray-400">
          Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
          bibendum auctor consequat ipsum nec sagittis vulputate cursus a sit
          amet mauris morbi accumsan ipsum velit.
        </p>
        <div className="w-10/12 md:w-8/12">
          <Faq />
        </div>
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

export default Support;
