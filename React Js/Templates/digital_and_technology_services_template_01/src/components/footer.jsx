import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-between w-full px-8 md:flex-row mx-auto gap-16 py-12">
        <div className="flex flex-col gap-4 md:w-6/12">
          <div className="text-3xl text-gray-500 text-center">About us</div>
          <div className="text-base text-gray-500 text-center">
            Dolore in elit commodo laborum amet amet ut. Anim cupidatat nostrud
            duis exercitation Lorem reprehenderit. Sit Lorem reprehenderit
            tempor mollit laborest in. Enim dolor fugiat fugiat non ipsum labore
            deserunt culpa Lorem. Voluptate ea pariatur proident laboris.
          </div>
        </div>

        <div className="flex md:w-5/12 md:justify-between">
          <div className="flex flex-col gap-4 w-6/12">
            <div className="text-3xl text-gray-500">Our Services</div>
            <div className="flex flex-col gap-1">
              <Link to="/contactus" className="text-base text-gray-500">
                incididunt eu nulla
              </Link>
              <Link to="/contactus" className="text-base text-gray-500">
                anim ipsum duis
              </Link>
              <Link to="/contactus" className="text-base text-gray-500">
                quis eu sunt
              </Link>
              <Link to="/contactus" className="text-base text-gray-500">
                dolor aliquip voluptate
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 w-6/12">
            <span className="text-4xl text-blue-800 font-bold font-logo pl-8">
              Digitaly
            </span>

            <div className="flex flex-col gap-1 text-base text-end text-gray-500">
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
        <div className="text-gray-500">Copyright © 2025 WebTemplates</div>
        <div className="text-gray-500">Powered by Digitaly</div>
      </div>
    </div>
  );
};

export default Footer;
