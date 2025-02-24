import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      return;
    }
    const response = await axios.post(
      "http://localhost:5001/api/signup",
      formData
    );
    console.log(response.data.message);

    navigate("/login");
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
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="first name"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-9/12 rounded px-3 py-1"
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="last name"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-9/12 rounded px-3 py-1"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-9/12 rounded px-3 py-1"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-9/12 rounded px-3 py-1"
          />
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            className="text-left text-gray-600 outline-0 border-gray-300 border w-9/12 rounded px-3 py-1"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <button
            type="submit"
            className="cursor-pointer text-xl text-white rounded px-4 py-2 bg-blue-600 hover:bg-green-700"
          >
            Register
          </button>
          <Link
            to={"/login"}
            className="cursor-pointer text-base text-blue-700 rounded px-3 py-1 hover:bg-green-700 hover:text-white"
          >
            Already Have an Account, Click Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
