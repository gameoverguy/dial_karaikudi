import { Link, NavLink } from "react-router-dom";
import Location from "./location";
import { WeatherContext } from "../context/WeatherContext";
import { useContext, useEffect } from "react";

export default function Navbar() {
  const { userActive, setUserActive, loggedInUser } =
    useContext(WeatherContext);

  useEffect(() => {
    console.log(userActive);
  }, [userActive]);

  function handleLogOut() {
    setUserActive(false);
    loggedInUser(null);
  }

  return (
    <div>
      <nav className="bg-black/15 backdrop-blur-xs w-full h-18 flex items-center fixed top-0 left-0 pl-5 pr-24">
        <div className="flex items-center w-full justify-between">
          <div className="text-gray-700 text-4xl font-bold flex items-center">
            Weather App
          </div>

          <div className="flex gap-32 items-center w-fit">
            <Location />

            <ul className="flex gap-4">
              <li>
                <Link to="/">
                  <div className="text-2xl text-gray-700 font-bold">Home</div>
                </Link>
              </li>

              <li>
                {userActive && (
                  <NavLink to={`/userdashboard/${loggedInUser.id}`}>
                    <div className="text-2xl text-gray-700 font-bold">
                      Dashboard
                    </div>
                  </NavLink>
                )}
              </li>
              <li>
                {userActive && (
                  <NavLink to={`/`}>
                    <div
                      onClick={handleLogOut}
                      className="text-2xl text-gray-700 font-bold"
                    >
                      Logout
                    </div>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
