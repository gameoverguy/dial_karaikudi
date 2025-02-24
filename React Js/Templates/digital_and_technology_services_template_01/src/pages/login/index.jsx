import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/login", formData);
    navigate("/home");

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center py-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 justify-items-center h-fit w-4/12 rounded-xl px-12 py-16 bg-blue-100"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-8/12 rounded px-3 py-1"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-8/12 rounded px-3 py-1"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <button
            className="cursor-pointer text-xl text-white rounded px-4 py-2 bg-blue-600 hover:bg-green-700"
            type="submit"
          >
            Login
          </button>
          <Link
            className="cursor-pointer text-base text-blue-700 rounded px-3 py-1 hover:bg-green-700 hover:text-white"
            to={"/signup"}
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
