import { useEffect, useState } from "react";
import HeaderCard from "../HeaderCard";

const WeatherTime = () => {
  const [weatherTime, setWeatherTime] = useState("");

  const getWeatherTime = () => {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=seattle",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1bafcfd6cdmsh167bf7b3fd7f7f3p1afa4ajsn9a6ed3598fee",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // setWeatherTime(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWeatherTime();
  }, [getWeatherTime]);

  return (
    <div className="card">
      <HeaderCard label="Birras necesarias" />
      <div className="card-content">
        <div className="content">{JSON.stringify(weatherTime)}</div>
      </div>
    </div>
  );
};

export default WeatherTime;
