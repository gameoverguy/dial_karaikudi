import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";

export default function Login() {
  const [userAvailable, setUserAvailable] = useState(false);
  const navigate = useNavigate();

  const [formfield01, setformfield01] = useState("");
  const [formfield02, setformfield02] = useState("");

  const [users, setUsers] = useState(null);

  const {
    setUserActive,
    loggedInUser,
    setLoggedInUser,
    loginStatus,
    setLoginStatus,
  } = useContext(WeatherContext);

  function clearForm() {
    setformfield01("");
    setformfield02("");
  }

  const handleLogin = () => {
    const User = users.find((user) => {
      // user.name === formfield01 && user.pass === formfield02;

      if (user.name === formfield01 && user.pass === formfield02) {
        return user;
      } else {
        setLoginStatus("username or password is Incorrect");
      }
    });

    if (User) {
      setLoggedInUser(User); // Updates state asynchronously
      setUserAvailable(true); // Updates state asynchronously
    } else {
      console.log("Username or password is incorrect");
      clearForm();
    }
  };

  useEffect(() => {
    setLoginStatus("");
    console.log("test");
    if (userAvailable && loggedInUser) {
      setUserActive(true);
      navigate(`/userdashboard/${loggedInUser.id}`);
    }
  }, [setLoginStatus, setUserActive, navigate, loggedInUser, userAvailable]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div className="w-fit p-12 flex flex-col gap-8 items-center bg-black/15 backdrop-blur-xs rounded-2xl">
        <div className="text-4xl text-white">Login</div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-2">
            <div className="text-xl text-white">Username</div>
            <input
              className="bg-gray-300 pl-2 h-8 rounded"
              placeholder="username"
              name="username"
              maxLength="20"
              onChange={(event) => setformfield01(event.target.value)}
              value={formfield01}
            />
          </div>
          <div className="flex gap-2">
            <div className="text-xl text-white">Password</div>
            <input
              className="bg-gray-300 pl-2 h-8 rounded"
              type="password"
              maxLength="20"
              placeholder="password"
              name="password"
              onChange={(event) => setformfield02(event.target.value)}
              value={formfield02}
            ></input>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl w-fit"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            onClick={clearForm}
          >
            cancel
          </button>
        </div>
        <div className="text-l text-white">{loginStatus}</div>
      </div>
    </>
  );
}
