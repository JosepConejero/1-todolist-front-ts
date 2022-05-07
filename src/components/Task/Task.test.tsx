import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When it's rendered", () => {
    test("Then it shows ...", () => {
      render(<Task />);
      //const element = screen.getByRole("button", { name: "silvia" });
      const element = screen.getByText("ADD");
      expect(element).toBeInTheDocument();
    });
  });
});
