import { createContext, useState, useEffect } from "react";
// import { useParams} from "react-router-dom";
import { node } from "prop-types";

import { getWeatherFromApi } from "./services";
import { weatherDataNormalizer } from "./normalize";

export const WeatherTimeContext = createContext();

const WeatherTimeContextProvider = ({ children }) => {
  const [weatherTime, setWeatherTime] = useState({});
  const [loading, setLoading] = useState(false);

  const getWeatherTime = async () => {
    try {
      setLoading(true);
      const data = await getWeatherFromApi();
      const normalizerData = weatherDataNormalizer(data);
      setWeatherTime(normalizerData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherTime();
  }, []);

  return (
    <WeatherTimeContext.Provider value={{ weatherTime, loading }}>
      {children}
    </WeatherTimeContext.Provider>
  );
};

WeatherTimeContextProvider.propTypes = {
  children: node,
};

export default WeatherTimeContextProvider;
