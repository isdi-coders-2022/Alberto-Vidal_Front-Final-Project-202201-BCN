import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render all the projects in the database", async () => {
      const expectedLenght = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const projects = screen.getAllByRole("listitem");
        expect(projects).toHaveLength(expectedLenght);
      });
    });
  });
});
