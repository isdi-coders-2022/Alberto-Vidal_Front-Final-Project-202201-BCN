import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "./Home";

describe("Given a Home Page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list with name projects", () => {
      const name = /projects/i;

      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      const list = screen.getByRole("list", { name });

      expect(list).toBeInTheDocument();
    });
  });
});
