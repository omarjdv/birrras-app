import { render } from "@testing-library/react";

import HeaderCard from "./HeaderCard";

describe("GIVEN a HeaderCard", () => {
  describe("WHEN HeaderCard", () => {
    it("It should show correct label", () => {
      const { getByText } = render(<HeaderCard label="Header" />);
      expect(getByText("Header")).toBeInTheDocument();
    });
  });
});
