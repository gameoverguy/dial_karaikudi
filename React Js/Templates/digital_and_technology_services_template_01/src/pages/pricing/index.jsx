import SectionTemplate_01 from "../../components/SectionTemplate_01";

import { DiAndroid } from "react-icons/di";
import { LuHardDriveDownload } from "react-icons/lu";
import { FiLoader } from "react-icons/fi";

const Pricing = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Pricing"}
          sectionDesc={
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
          }
        />
      </div>

      <div className="flex flex-col gap-16 justify-center items-center py-16">
        <div className="text-3xl text-blue-700">US $499 One Time Payment</div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-10/12 md:w-3/12 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-right">
                Highlight Feature
              </h1>
              <p className="text-base text-gray-500 text-center md:text-right">
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis amet nisi elit consequat ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-right">
                Highlight Feature
              </h1>
              <p className="text-base text-gray-500 text-center md:text-right">
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis amet nisi elit consequat ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-right">
                Highlight Feature
              </h1>
              <p className="text-base text-gray-500 text-center md:text-right">
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis amet nisi elit consequat ipsum.
              </p>
            </div>
          </div>

          <img className="h-[600px]" src="/images/agency-graphic.png" />

          <div className="w-10/12 md:w-3/12 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-left">
                Highlight Feature
              </h1>
              <p className="text-base text-gray-500 text-center md:text-left">
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis amet nisi elit consequat ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-left">
                Highlight Feature
              </h1>
              <p className="text-base text-gray-500 text-center md:text-left">
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis amet nisi elit consequat ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl text-blue-600 text-center md:text-left">
                Highlight Feature
              </h1>
              <p className="text-base text-gray-500 text-center md:text-left">
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis amet nisi elit consequat ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 py-16 justify-center items-center">
        <div className="text-4xl text-blue-800">
          Also Get These for $39 / Month
        </div>
        <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center items-center">
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
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-yellow-400">
              <FiLoader />
            </div>
            <div className="text-3xl text-blue-800">Content</div>
            <div className="w-80 px-3 py-4 text-base text-gray-400">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
              bibendum auctor consequat ipsum nec.
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-yellow-400">
              <FiLoader />
            </div>
            <div className="text-3xl text-blue-800">Lead Capture</div>
            <div className="w-80 px-3 py-4 text-base text-gray-400">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
              bibendum auctor consequat ipsum nec.
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center px-4 py-3 w-fit">
            <div className="text-4xl text-yellow-400">
              <FiLoader />
            </div>
            <div className="text-3xl text-blue-800">SEO</div>
            <div className="w-80 px-3 py-4 text-base text-gray-400">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis
              bibendum auctor consequat ipsum nec.
            </div>
          </div>
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

export default Pricing;
