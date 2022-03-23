import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import EditProject from "./EditProject";

describe("Given an edit project page", () => {
  describe("When it's rendered", () => {
    test("Then it should match snapshot", () => {
      const view = render(
        <BrowserRouter>
          <Provider store={store}>
            <EditProject />
          </Provider>
        </BrowserRouter>
      );

      expect(view).toMatchSnapshot();
    });
  });
});
