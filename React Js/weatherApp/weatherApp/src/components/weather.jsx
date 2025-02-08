import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function Weather() {
  const { weatherObject, weatherBulkObject } = useContext(WeatherContext);

  return (
    <div className="w-fit flex flex-col items-center gap-8 p-5 justify-evenly">
      <div className="flex flex-col gap-2">
        <span className="text-white">
          Location : {weatherObject.locationName}
        </span>
        <span className="text-white">
          Temperature : {weatherObject.currentTemperature}°C
        </span>
        <span className="text-white">
          Weather Status : {weatherObject.weatherStatus}
        </span>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col justify-between items-center w-24 p-2 bg-green-800 rounded-l">
          <div className="w-fit text-white">Today</div>
          <div className="text-white">
            {weatherBulkObject.currentDay.temperature}°C
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-24 p-2">
          <div className="w-fit text-white">{weatherBulkObject.day01.day}</div>
          <div className="text-white">
            {weatherBulkObject.day01.temperature}°C
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-24 p-2">
          <div className="text-white">{weatherBulkObject.day02.day}</div>
          <div className="text-white">
            {weatherBulkObject.day02.temperature}°C
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-24 p-2">
          <div className="text-white">{weatherBulkObject.day03.day}</div>
          <div className="text-white">
            {weatherBulkObject.day03.temperature}°C
          </div>
        </div>
      </div>
    </div>
  );
}
