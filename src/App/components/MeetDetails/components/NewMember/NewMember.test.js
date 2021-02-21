import { render, fireEvent, getByTestId } from "@testing-library/react";

import NewMember from "./NewMember";

describe("GIVEN a NewMember", () => {
  const label = "Nuevos Participantes";
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const data = {
    name: "Omar",
    email: "omarjdiazv@gmail.com",
  };
  describe("WHEN NewMember", () => {
    it("It should do correct onSubmit", () => {
      const { getByText, getByTestId } = render(
        <NewMember
          label={label}
          onSubmit={onSubmit}
          onChange={onChange}
          data={data}
        />
      );
      expect(getByText("Nuevos Participantes")).toBeInTheDocument();
      const inputName = getByTestId("input-name");
      const inputEmail = getByTestId("input-email");

      fireEvent.change(inputName, { target: { value: data.name } });
      fireEvent.change(inputEmail, { target: { value: data.email } });
      fireEvent.click(getByTestId("button-new-member"));
      expect(onSubmit).toBeCalled();
    });
  });
});
