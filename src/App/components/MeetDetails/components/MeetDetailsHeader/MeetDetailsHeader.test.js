import { render } from "@testing-library/react";

import MeetDetailsHeader from "./MeetDetailsHeader";

describe("GIVEN a MeetDetailsHeader", () => {
  describe("WHEN MeetDetailsHeader", () => {
    it("It should show correct label", () => {
      const { getByText } = render(
        <MeetDetailsHeader theme="Frontend" title="Developer" />
      );
      expect(getByText("Frontend")).toBeInTheDocument();
      expect(getByText("Developer")).toBeInTheDocument();
    });
  });
});
