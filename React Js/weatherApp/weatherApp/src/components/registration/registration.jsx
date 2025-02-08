import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import {
  validEmail,
  validPassword,
  validMobile,
  validUsername,
} from "../regex";

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const { registrationStatus, setRegistrationStatus } =
    useContext(WeatherContext);

  function clearForm() {
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
  }

  function handleAddData() {
    if (!username || !password || !email || !mobile) {
      setRegistrationStatus("All fields are required!");
      return;
    }

    if (!validUsername.test(username)) {
      return;
    }

    if (!validPassword.test(password)) {
      return;
    }

    if (!validEmail.test(email)) {
      return;
    }

    if (!validMobile.test(mobile)) {
      return;
    }

    const RegFormData = {
      name: username,
      pass: password,
      mail: email,
      phone: mobile,
      disabled: true,
    };

    fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(RegFormData),
    }).then(() => {
      console.log("new user registered");
    });

    clearForm();

    setRegistrationStatus("Registered Successfully");
  }

  useEffect(() => {
    setRegistrationStatus("");
    console.log("test");
  }, [setRegistrationStatus]);

  return (
    <>
      <div className="w-fit p-12 flex flex-col gap-8 justify-center items-center bg-black/15 backdrop-blur-xs rounded-2xl">
        <div className="text-4xl text-white">Register</div>

        <table>
          <div className="flex flex-col justify-center items-center gap-3 w-full max-w-xs">
            <tr className="flex gap-4 w-full">
              <td scope="col" className="text-xl text-white">
                Username
              </td>
              <td scope="col">
                <input
                  maxLength="20"
                  className="bg-gray-300 pl-2 h-8 rounded"
                  placeholder="name"
                  name="username"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                />
              </td>
            </tr>
            <tr className="text-xs w-full text-wrap text-red-500 font-bold">
              {username && !validUsername.test(username)
                ? "username must contain atleast one number and one lowercase alphabet"
                : ""}
            </tr>
          </div>

          <div className="flex flex-col justify-center items-center gap-3 w-full max-w-xs">
            <tr className="flex gap-4 w-full">
              <td scope="col" className="text-xl text-white">
                Password
              </td>
              <td>
                <input
                  maxLength="20"
                  className="bg-gray-300 pl-2 h-8 rounded"
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                ></input>
              </td>
            </tr>
            <tr>
              <div className="text-xs w-full text-wrap text-red-500 font-bold">
                {password && !validPassword.test(password)
                  ? "atleast 1 symbol, 1 uppercase letter and 1 number is required for password"
                  : ""}
              </div>
            </tr>
          </div>

          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>

        <div className="flex flex-col justify-center items-center gap-3 w-full max-w-xs">
          <div className="flex gap-4">
            <div className="text-xl text-white">Password</div>
            <input
              maxLength="20"
              className="bg-gray-300 pl-2 h-8 rounded"
              type="password"
              placeholder="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            ></input>
          </div>
          <div className="text-xs w-full text-wrap text-red-500 font-bold">
            {password && !validPassword.test(password)
              ? "atleast 1 symbol, 1 uppercase letter and 1 number is required for password"
              : ""}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-full max-w-xs">
          <div className="flex gap-4">
            <div className="text-xl text-white">Email</div>
            <input
              className="bg-gray-300 pl-2 h-8 rounded"
              placeholder="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            ></input>
          </div>
          <div className="text-xs w-full text-wrap text-red-500 font-bold">
            {email && !validEmail.test(email) ? "email id must be valid" : ""}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-full max-w-xs">
          <div className="flex gap-4">
            <div className="text-xl text-white">Mobile</div>
            <input
              className="bg-gray-300 pl-2 h-8 rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="mobile"
              name="mobile"
              onChange={(event) => {
                // Limit the length to 10 digits
                if (event.target.value.length <= 10) {
                  setMobile(event.target.value);
                }
              }}
              value={mobile}
            ></input>
          </div>
          <div className="text-xs w-full text-wrap text-red-500 font-bold">
            {mobile && !validMobile.test(mobile)
              ? "mobile number must have 10 digits"
              : ""}
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl w-fit"
            onClick={handleAddData}
          >
            Register
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            onClick={clearForm}
          >
            cancel
          </button>
        </div>
        <div className="text-xs w-full text-red-500 font-bold">
          {registrationStatus}
        </div>
      </div>
    </>
  );
}

export default Registration;
