import { useEffect, useState } from "react";

import HeaderCard from "../HeaderCard";
import { ReactComponent as WeatherImg } from "../../../../../assets/img/weather.svg";
import Spinner from "../../../Spinner";

import styles from "./WeatherTime.module.css";

const WEATHER_API_ARGENTINE_ID = 3865483;

const getWeatherFromApi = async () => {
  const URL = `https://community-open-weather-map.p.rapidapi.com/weather?units=metric&id=${WEATHER_API_ARGENTINE_ID}`;
  const configApi = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1bafcfd6cdmsh167bf7b3fd7f7f3p1afa4ajsn9a6ed3598fee",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  const response = await fetch(URL, configApi);
  const data = await response.json();
  return data;
};

const getWeatherFromApiA = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=-34.6083&lon=-58.3712&exclude=hourly,minutely&appid=5078f4dc1c16d7d9ff5398a45b46701c&units=metric`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};

const WeatherTime = () => {
  const [weatherTime, setWeatherTime] = useState();
  const [loading, setLoading] = useState(false);

  const getWeatherTime = async () => {
    try {
      setLoading(true);
      const data = await getWeatherFromApi();
      setLoading(false);
      setWeatherTime(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherFromApiA();
    getWeatherTime();
  }, []);

  const temp = JSON.stringify(weatherTime?.main?.temp);
  const feelLike = JSON.stringify(weatherTime?.main?.feels_like);
  const tempMin = JSON.stringify(weatherTime?.main?.temp_min);
  const tempMax = JSON.stringify(weatherTime?.main?.temp_max);

  return (
    <div className={`${styles.card} card`}>
      <HeaderCard label="Birras necesarias" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="card-content">
          <div className={styles.weather}>
            <div className="title is-5 mr-5">Clima actual</div>
            <WeatherImg width="150px" height="100px" />
          </div>
          <div>Temperatura {temp}°</div>
          <div>Sensación térmica de {feelLike}°</div>
          <div>Temperatura máxima {tempMax}°</div>
          <div>Temperatura mínima {tempMin}°</div>
        </div>
      )}
    </div>
  );
};

export default WeatherTime;
