export const beerBox = (temp, members) => {
  let beerAmount = 0;
  if (temp >= 20 && temp <= 24) {
    beerAmount = members;
  }
  if (temp < 20) {
    beerAmount = members * 0.75;
  }
  if (temp > 24) {
    beerAmount = members * 2;
  }
  const beerBoxes = Math.ceil(beerAmount / 6);
  return beerBoxes;
};
