import { weatherDataNormalizer } from "./normalize";
import { data, result } from "./constants";

describe("GIVEN a weatherDataNormalizer", () => {
  it("THEN should return correct data", () => {
    expect(weatherDataNormalizer(data)).toEqual(result);
  });
});
