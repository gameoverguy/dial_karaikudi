import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between md:items-center w-full px-8 lg:flex-row mx-auto gap-8 xl:gap-16 md:gap-8 py-12">
        <div className="flex flex-col gap-4 md:w-10/12 lg:w-6/12">
          <div className="text-3xl text-gray-500 text-center">About us</div>
          <div className="text-base text-gray-500 text-center">
            Dolore in elit commodo laborum amet amet ut. Anim cupidatat nostrud
            duis exercitation Lorem reprehenderit. Sit Lorem reprehenderit
            tempor mollit laborest in. Enim dolor fugiat fugiat non ipsum labore
            deserunt culpa Lorem. Voluptate ea pariatur proident laboris.
          </div>
        </div>

        <div className="flex flex-col gap-y-8 xl:gap-8 md:flex-row md:w-full md:items-center lg:w-6/12 md:justify-between md:px-16 lg:px-6">
          <div className="flex flex-col gap-4 w-full md:w-5/12">
            <div className="text-3xl text-center text-gray-500 md:text-left">
              Our Services
            </div>
            <div className="flex flex-col items-center md:items-start w-full gap-1 mx-auto">
              <Link
                to="/contactus"
                className="text-base text-gray-400 font-bold"
              >
                incididunt eu nulla
              </Link>
              <Link
                to="/contactus"
                className="text-base text-gray-400 font-bold"
              >
                anim ipsum duis
              </Link>
              <Link
                to="/contactus"
                className="text-base text-gray-400 font-bold"
              >
                quis eu sunt
              </Link>
              <Link
                to="/contactus"
                className="text-base text-gray-400 font-bold"
              >
                dolor aliquip voluptate
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-7/12">
            <span className=" text-4xl text-blue-800 font-bold font-logo">
              Digitaly
            </span>

            <div className="flex flex-col gap-1 text-base text-start md:text-end text-gray-500">
              123 six Street, IN 846628
              <br />
              E-mail: contact@digitaly.live
              <br />
              Phone: 123 455 755
            </div>
          </div>
        </div>
      </div>
      <hr className="w-11/12 mx-auto text-gray-300"></hr>
      <div className="flex justify-between items-center py-6 px-8 md:px-10">
        <div className="text-gray-500 text-left">
          Copyright © 2025 WebTemplates
        </div>
        <div className="text-gray-500 text-right">Powered by Digitaly</div>
      </div>
    </div>
  );
};

export default Footer;
