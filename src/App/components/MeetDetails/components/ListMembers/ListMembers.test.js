import { render } from "@testing-library/react";

import ListMembers from "./ListMembers";

describe("GIVEN a ListMembers", () => {
  const members = [
    {
      name: "David Figueroa ",
      email: "omarjdiazv@gmail.com",
    },
  ];
  describe("WHEN ListMembers", () => {
    it("It should show correct label", () => {
      const { getByText } = render(
        <ListMembers label="Header" members={members} />
      );
      expect(getByText("Header")).toBeInTheDocument();
      expect(getByText("David Figueroa")).toBeInTheDocument();
    });
  });
});
