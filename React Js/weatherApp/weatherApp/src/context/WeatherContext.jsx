/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [bulkData, setBulkData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const apiKey = "4def716a15162d00fa1272aba31cc9c9";
  const apiKey_02 = "1ec691999a0d4cf34877afe342b6869e";

  const [loginStatus, setLoginStatus] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [modifyStatus, setModifyStatus] = useState("");

  const [userActive, setUserActive] = useState(false);

  const [weatherObject, setWeatherObject] = useState({
    locationName: "-",
    currentTemperature: 0,
    weatherStatus: "-",
  });

  const [weatherBulkObject, setBulkWeatherObject] = useState({
    currentDay: { temperature: 0, day: "Today" },
    day01: { temperature: 0, day: "day01" },
    day02: { temperature: 0, day: "day02" },
    day03: { temperature: 0, day: "day03" },
  });

  function handleInputValue(input) {
    setInputValue(input);
  }

  function getCurrentWeatherData(data) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }

  function getBulkWeatherData(data) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&cnt=25&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setBulkData(data));
  }

  function getCurrentLocation() {
    fetch(
      `https://api.weatherstack.com/current?access_key=${apiKey_02}&query=fetch:ip`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocationData(data);
        console.log(data);
      });
  }

  function handleSearch() {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        getCurrentWeatherData(data);
        getBulkWeatherData(data);
      });
  }

  function handleCancel() {
    setBulkWeatherObject({
      currentDay: { temperature: 0, day: "Today" },
      day01: { temperature: 0, day: "day01" },
      day02: { temperature: 0, day: "day02" },
      day03: { temperature: 0, day: "day03" },
    });

    setWeatherObject({
      locationName: "-",
      weatherStatus: "-",
      currentTemperature: 0,
    });
  }

  useEffect(() => {
    if (!weatherData?.main || !bulkData?.list) return;

    const celsiusValue = weatherData.main.temp - 273.15;

    setWeatherObject({
      locationName: weatherData.name,
      weatherStatus: weatherData.weather[0].description,
      currentTemperature: celsiusValue.toFixed(2),
    });

    const getDayOfWeek = (index) => {
      if (!bulkData.list[index]) return "N/A";
      const date = new Date(bulkData.list[index].dt_txt);
      return date.toLocaleDateString("en-US", { weekday: "long" });
    };

    setBulkWeatherObject({
      currentDay: {
        temperature: bulkData.list[0]?.main.temp ?? 0,
        day: getDayOfWeek(0),
      },
      day01: {
        temperature: bulkData.list[8]?.main.temp ?? 0,
        day: getDayOfWeek(8),
      },
      day02: {
        temperature: bulkData.list[16]?.main.temp ?? 0,
        day: getDayOfWeek(16),
      },
      day03: {
        temperature: bulkData.list[24]?.main.temp ?? 0,
        day: getDayOfWeek(24),
      },
    });
  }, [weatherData, bulkData]);

  return (
    <WeatherContext.Provider
      value={{
        inputValue,
        handleInputValue,
        handleSearch,
        handleCancel,
        weatherObject,
        weatherBulkObject,
        getCurrentLocation,
        locationData,
        userActive,
        setUserActive,
        loggedInUser,
        setLoggedInUser,
        loginStatus,
        setLoginStatus,
        registrationStatus,
        setRegistrationStatus,
        modifyStatus,
        setModifyStatus,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
