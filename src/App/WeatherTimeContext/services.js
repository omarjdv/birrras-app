import { API_URL, API_ID, LATITUDE, LONGITUDE } from "./constants";

export const getWeatherFromApi = async () => {
  const URL = `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=hourly,minutely&appid=${API_ID}&units=metric`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
