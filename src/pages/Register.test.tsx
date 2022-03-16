import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Register from "./Register";

describe("Given a login page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show inputs username, password, name, avatar and a register button", () => {
      const expectedFields = [/username/i, /password/i, /^name/i, /avatar/i];
      const expectedButton = /register/i;

      render(
        <Provider store={store}>
          <Register />
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
