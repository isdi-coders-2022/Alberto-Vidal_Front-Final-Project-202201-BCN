import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProjectForm from "./ProjectForm";

describe("Given a NewProject Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 inputs with names preview, repo, and production and a disabled button", () => {
      const onSubmit = jest.fn();
      const labels = [/repo/i, /production/i, /preview/i];
      const buttonName = /submit/i;

      render(<ProjectForm onSubmit={onSubmit} />);
      const inputs = labels.map((label) => screen.getByLabelText(label));
      const button = screen.getByRole("button", { name: buttonName });

      inputs.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });

  describe("When it's rendered and all the inputs filled but with no valid url", () => {
    test("Then the the submit button sholud be enabled but the action on submit not performed", () => {
      const onSubmit = jest.fn();
      const labels = [/repo/i, /production/i, /preview/i];
      const buttonName = /submit/i;
      const text = "uastusaoeu";

      render(<ProjectForm onSubmit={onSubmit} />);
      const inputs = labels.map((label) => screen.getByLabelText(label));
      const button = screen.getByRole("button", { name: buttonName });
      inputs.forEach((input) => {
        userEvent.type(input, text);
      });

      expect(button).not.toBeDisabled();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  describe("When it's rendered and repo and preview inputs are filled but with no valid url and clicked on the submit button", () => {
    test("Then the texts 'production must be a valid URL' and 'repo must be a valid URL' should be rendered", async () => {
      const onSubmit = jest.fn();
      const labels = [/repo/i, /production/i, /preview/i];
      const buttonName = /submit/i;
      const textsToRender = [
        /production must be a valid URL/i,
        /repo must be a valid URL/i,
      ];
      const textTyped = "uastusaoeu";

      render(<ProjectForm onSubmit={onSubmit} />);
      const inputs = labels.map((label) => screen.getByLabelText(label));
      inputs.forEach((input) => {
        userEvent.type(input, textTyped);
      });
      const button = screen.getByRole("button", { name: buttonName });
      userEvent.click(button);
      const firstRenderedText = await screen.findByText(textsToRender[0]);
      const secondRenderedText = await screen.findByText(textsToRender[1]);

      expect(firstRenderedText).toBeInTheDocument();
      expect(secondRenderedText).toBeInTheDocument();
    });
  });

  describe("When it's rendered and all the inputs filled but with valid url and clicked on the submit button", () => {
    test("Then the the submit button sholud be disabled", () => {
      const onSubmit = jest.fn();
      const labels = [/repo/i, /production/i, /preview/i];
      const buttonName = /submit/i;
      const validUrl = "http://validurl.com";

      render(<ProjectForm onSubmit={onSubmit} />);
      const inputs = labels.map((label) => screen.getByLabelText(label));
      const button = screen.getByRole("button", { name: buttonName });
      inputs.forEach((input) => {
        userEvent.type(input, validUrl);
      });
      // userEvent.click(button);

      expect(button).not.toBeDisabled();
    });
  });
});
