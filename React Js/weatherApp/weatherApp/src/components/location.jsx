import { useEffect, useState } from "react";

export default function Location() {
  const [weatherData, setWeatherData] = useState("");
  const apiKey = "4def716a15162d00fa1272aba31cc9c9";

  // Function to fetch weather using coordinates
  const fetchWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          alert("Location access denied. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className="flex items-center gap-3">
          <p className="text-xl text-gray-800 font-bold">Location :</p>
          <p className="text-2xl text-blue-700 font-bold">{weatherData.name}</p>
        </div>
      ) : (
        <p className="text-l text-gray-700">Loading weather data...</p>
      )}
    </div>
  );
}
