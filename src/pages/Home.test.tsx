import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import Home from "./Home";

describe("Given a Home Page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list with name projects", () => {
      const name = /projects/i;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      );
      const list = screen.getByRole("list", { name });

      expect(list).toBeInTheDocument();
    });
  });
});
