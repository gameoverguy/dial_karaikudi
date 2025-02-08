import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function Searchbar() {
  const { handleInputValue, handleSearch, handleCancel } =
    useContext(WeatherContext);
  return (
    <div className="w-fit flex justify-center gap-4 p-5">
      <input
        onChange={(e) => handleInputValue(e.target.value)}
        placeholder="Enter you Location"
        className="border border-gray-200 bg-gray-600 pl-2 rounded outline-0 text-white"
      ></input>
      <button
        onClick={handleSearch}
        className="bg-amber-500 text-white px-4 py-1 rounded shadow-2xl hover:bg-amber-600"
      >
        Search
      </button>
      <button
        onClick={handleCancel}
        className="bg-red-500 text-white px-4 py-1 rounded shadow-2xl hover:bg-amber-600"
      >
        Cancel
      </button>
    </div>
  );
}
