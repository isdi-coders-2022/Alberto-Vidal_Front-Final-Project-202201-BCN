import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import UserForm from "./UserForm";

describe("Given a UserForm component", () => {
  describe("When it's rendered with prop isLogin set to true", () => {
    test("Then it should render username and password fields", () => {
      const onSubmit = jest.fn();
      const isLogin = true;
      const expectedFields = [/username/i, /password/i];

      render(
        <BrowserRouter>
          <UserForm isLogin={isLogin} onSubmit={onSubmit} />
        </BrowserRouter>
      );
      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );

      fields.forEach((field) => expect(field).toBeInTheDocument());
    });

    test("Then it should render only two fields", () => {
      const onSubmit = jest.fn();
      const isLogin = true;

      render(
        <BrowserRouter>
          <UserForm isLogin={isLogin} onSubmit={onSubmit} />
        </BrowserRouter>
      );
      const fields = screen.getByRole("textbox");
      const password = screen.getByLabelText("password");

      expect(fields).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });

  describe("When it's rendered with prop isLogin set to false", () => {
    test("Then it should render username, password, name, and avatar fields", () => {
      const onSubmit = jest.fn();
      const isLogin = false;
      const expectedFields = [/username/i, /password/i, /^name/i, /avatar/i];

      render(
        <BrowserRouter>
          <UserForm isLogin={isLogin} onSubmit={onSubmit} />
        </BrowserRouter>
      );
      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );

      fields.forEach((field) => expect(field).toBeInTheDocument());
    });
  });
  describe("When it's rendered with prop isLogin set to false and all the inputs filled", () => {
    test("Then the button shouldnt be disabled", () => {
      const onSubmit = jest.fn();
      const isLogin = false;
      const expectedFields = [/username/i, /password/i, /^name/i, /avatar/i];
      const buttonName = isLogin ? /log in/i : /register/i;
      const someText = "tueanhnu";

      render(
        <BrowserRouter>
          <UserForm isLogin={isLogin} onSubmit={onSubmit} />
        </BrowserRouter>
      );
      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );
      fields.forEach((field) => userEvent.type(field, someText));
      const button = screen.getByRole("button", { name: buttonName });

      expect(button).not.toBeDisabled();
    });
  });

  describe("When it's rendered with prop isLogin set to true and all the inputs filled", () => {
    test("Then the button shouldnt be disabled", () => {
      const onSubmit = jest.fn();
      const isLogin = true;
      const expectedFields = [/username/i, /password/i];
      const buttonName = isLogin ? /log in/i : /register/i;
      const someText = "tueanhnu";

      render(
        <BrowserRouter>
          <UserForm isLogin={isLogin} onSubmit={onSubmit} />
        </BrowserRouter>
      );
      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );
      fields.forEach((field) => userEvent.type(field, someText));
      const button = screen.getByRole("button", { name: buttonName });

      expect(button).not.toBeDisabled();
    });
  });

  describe("When it's rendered with prop isLogin set to false and all the inputs filled and clicked on the button", () => {
    test("Then the onSubmit action should be performed", async () => {
      const onSubmit = jest.fn();
      const isLogin = false;
      const expectedFields = [/username/i, /password/i, /^name/i, /avatar/i];
      const buttonName = isLogin ? /log in/i : /register/i;
      const someText = "tueanhnu";

      render(
        <BrowserRouter>
          <UserForm isLogin={isLogin} onSubmit={onSubmit} />
        </BrowserRouter>
      );
      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );
      fields.forEach((field) => userEvent.type(field, someText));
      const button = screen.getByRole("button", { name: buttonName });
      userEvent.click(button);

      await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    });
  });
});
