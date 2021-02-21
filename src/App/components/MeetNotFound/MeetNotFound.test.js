import { render } from "@testing-library/react";

import MeetNotFound from "./MeetNotFound";

describe("GIVEN a MeetNotFound", () => {
  describe("WHEN rendered", () => {
    it("THEN should label", () => {
      const { getByText } = render(<MeetNotFound />);
      expect(
        getByText("¡Ups, aún no tenés meetups! Creá una nueva")
      ).toBeInTheDocument();
    });
  });
});
