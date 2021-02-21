import { beerBox } from "./utils";

describe("GIVEN a beerBox", () => {
  it("THEN should return correct beer boxes according with the temperature (24° or more)", () => {
    expect(beerBox(25, 2)).toEqual(1);
  });
  it("THEN should return correct beer boxes according with the temperature (20° or less)", () => {
    expect(beerBox(17, 10)).toEqual(2);
  });
  it("THEN should return correct beer boxes according with the temperature (beetwen 20 and 24)", () => {
    expect(beerBox(23, 20)).toEqual(4);
  });
});
