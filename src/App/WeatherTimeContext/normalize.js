import { format } from "date-fns";

export const weatherDataNormalizer = (data) => {
  if (!data.daily) {
    return {};
  }
  return data.daily.reduce((accum, item) => {
    const date = new Date(item.dt * 1000);
    const dateFormatted = format(date, "yyyy-MM-dd");
    accum[dateFormatted] = {
      temp: item.temp.day,
      min: item.temp.min,
      max: item.temp.max,
    };
    return accum;
  }, {});
};
