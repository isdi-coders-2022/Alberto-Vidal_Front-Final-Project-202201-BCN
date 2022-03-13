import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewProject from "./NewProject";

describe("Given a NewProject Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 inputs with names preview, repo, and production and a disabled button", () => {
      const onSubmit = jest.fn();
      const labels = [/repo/i, /production/i, /preview/i];
      const buttonName = /submit/i;

      render(<NewProject onSubmit={onSubmit} />);
      const inputs = labels.map((label) => screen.getByLabelText(label));
      const button = screen.getByRole("button", { name: buttonName });

      inputs.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });

  describe("When it's rendered and all the inputs filled and clicked on the submit button", () => {
    test("Then the on submit button should be performed on click", () => {
      const onSubmit = jest.fn();
      const labels = [/repo/i, /production/i, /preview/i];
      const buttonName = /submit/i;
      const text = "uastusaoeu";

      render(<NewProject onSubmit={onSubmit} />);
      const inputs = labels.map((label) => screen.getByLabelText(label));
      const button = screen.getByRole("button", { name: buttonName });
      inputs.forEach((input) => {
        userEvent.type(input, text);
      });
      userEvent.click(button);

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
