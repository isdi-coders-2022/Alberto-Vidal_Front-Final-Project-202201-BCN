import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Login from "./Login";

describe("Given a login page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show inputs username, password, and a login button", () => {
      const expectedFields = [/username/i, /password/i];
      const expectedButton = /log in/i;

      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );
      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );
      const button = screen.getByRole("button", { name: expectedButton });

      fields.forEach((field) => expect(field).toBeInTheDocument());
      expect(button).toBeInTheDocument();
    });
  });
});
