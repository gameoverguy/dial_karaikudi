import Card_01 from "../../components/card_01";
import SectionTemplate_01 from "../../components/SectionTemplate_01";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"About"}
          sectionDesc={
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
          }
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 py-24 px-4 w-full">
        <div className="text-4xl text-blue-700">Our Great Team</div>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 lg:gap-8 w-full">
          <div className="w-8/12 md:w-4/12 lg:w-3/12">
            <Card_01
              image={"/images/1.png"}
              name={"Anna Salazar"}
              title={"Web Master"}
            />
          </div>
          <div className="w-8/12 md:w-4/12 lg:w-3/12">
            <Card_01
              image={"/images/2.png"}
              name={"Anna Salazar"}
              title={"Web Master"}
            />
          </div>
          <div className="w-8/12 md:w-4/12 lg:w-3/12">
            <Card_01
              image={"/images/3.png"}
              name={"Anna Salazar"}
              title={"Web Master"}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"A Bit of History"}
          sectionDesc={
            "WEB_Studio was founded on principles of high standards, ethics, and genuine customer service. Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
          }
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-24 py-12">
        <h1 className="text-3xl text-blue-800 font-bold">Testimonials</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-10/12 mx-auto">
          <div className="flex flex-col justify-center items-center gap-6 w-full md:w-6/12">
            <img className="h-36" src="/images/1.png" />
            <p className="w-full text-base text-gray-500 text-center">
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

          <div className="flex flex-col justify-center items-center gap-6 w-full md:w-6/12">
            <img className="h-36" src="/images/3.png" />
            <p className="w-full text-base text-gray-500 text-center">
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

export default About;
