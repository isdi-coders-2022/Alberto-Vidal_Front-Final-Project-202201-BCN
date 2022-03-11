import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with text 'projectsnap'", () => {
      const name = /projectsnap/i;

      render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );
      const title = screen.getByRole("heading", { name });

      expect(title).toBeInTheDocument();
    });
  });

  test("Then it should show 3 links with names 'home', 'friends', and 'new project'", () => {
    const names = [/home/i, /friends/i, /new project/i];

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const links = names.map((name) => screen.getByRole("link", { name }));

    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
