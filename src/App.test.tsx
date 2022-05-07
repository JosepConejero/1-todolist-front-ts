import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const texto = screen.getByText(/prueba/i);
  expect(texto.textContent).toBe("prueba");
});
