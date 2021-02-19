const API_URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_ID = "5078f4dc1c16d7d9ff5398a45b46701c";

export const getWeatherFromApi = async () => {
  const URL = `${API_URL}?lat=-34.6083&lon=-58.3712&exclude=hourly,minutely&appid=${API_ID}&units=metric`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
