import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe("GIVEN a Spinner", () => {
  describe("WHEN rendered", () => {
    it("THEN should have class", () => {
      const { getByTestId } = render(<Spinner />);
      expect(getByTestId("spinner")).toHaveClass("container");
    });
  });
});
