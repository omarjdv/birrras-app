import React from "react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./WeatherTimeContext/services", () => ({
  getWeatherFromApi: () =>
    Promise.resolve({
      "2021-02-21": {
        temp: 27.46,
        min: 21.08,
        max: 28.9,
      },
    }),
}));

jest.mock("date-fns", () => ({ format: jest.fn(), addDays: jest.fn() }));

test("full app rendering/navigating for birras challenge", async () => {
  const history = createMemoryHistory();
  const { container, getByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(container.innerHTML).toMatch("Nueva Meetup");
  expect(container.innerHTML).toMatch("Seleccione una meetup o creá una nueva");

  fireEvent.click(getByText("Nueva Meetup"));
  await waitFor(() => {
    expect(getByText("Título")).toBeInTheDocument();
    expect(getByText("Tema")).toBeInTheDocument();
    expect(getByText("Fecha")).toBeInTheDocument();
  });
  const inputTitle = getByTestId("input-title");
  const inputTheme = getByTestId("input-theme");
  const inputDate = getByTestId("input-date");
  fireEvent.change(inputTitle, { target: { value: "Titulo" } });
  fireEvent.change(inputTheme, { target: { value: "Tema" } });
  fireEvent.change(inputDate, { target: { value: "22-02-2021" } });
  fireEvent.click(getByText("Creá tu meet"));

  expect(getByTestId("new-member")).toBeInTheDocument();
  expect(getByText("Lista de participantes")).toBeInTheDocument();
  expect(getByText("Información de la meetup")).toBeInTheDocument();
  expect(
    getByText("¡Una vez que añadas un participante, lo veras aquí!")
  ).toBeInTheDocument();

  const inputName = getByTestId("input-name");
  const inputEmail = getByTestId("input-email");

  fireEvent.change(inputName, { target: { value: "Omar Díaz" } });
  fireEvent.change(inputEmail, { target: { value: "omarjdiazv@gmail.com" } });
  fireEvent.click(getByText("Añadí participante"));
  expect(getByText("Omar Díaz")).toBeInTheDocument();
});
