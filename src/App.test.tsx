import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as jwt from "jwt-decode";
import { DefaultRequestBody, rest } from "msw";
import App from "./App";
import store from "./redux/store";
import { server } from "./mocks/server";
import { generateRandomProjects } from "./mocks/projects";

beforeAll(() => {
  server.listen();
  const mockLocalStorage = {
    getItem: () =>
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
  };
  Object.defineProperty(window, "localStorage", { value: mockLocalStorage });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

  describe("When it's rendered and clicked on a card delete button", () => {
    test("Then that card should disappear and a notification displayed", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const cards = await screen.findAllByRole("listitem", { name: "project" });
      const deleteButtons = screen.getAllByRole("link", { name: "delete" });
      userEvent.click(deleteButtons[0]);
      const toast = await screen.findByText(/deleted/i);

      expect(cards[0]).not.toBeInTheDocument();
      expect(toast).toBeInTheDocument();
    });
  });

  describe("When it's rendered and clicked on the author image", () => {
    test("Then it should show the post made by that author", async () => {
      const responseProjects = generateRandomProjects(5);
      const getHandler = rest.get<DefaultRequestBody>(
        `${process.env.VITE_API_URL}projects/all`,
        (req, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              projects: responseProjects,
            })
          )
      );
      server.use(getHandler);
      const logedUser = responseProjects[0].author;
      jest.spyOn(jwt, "default").mockImplementation(() => logedUser);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const profileLink = screen.getByRole("link", {
        name: logedUser.username,
      });
      userEvent.click(profileLink);
      const cardsTitle = await screen.findAllByRole("listitem");

      cardsTitle.forEach((card) => {
        expect(card.textContent).toBe(responseProjects[0].author.username);
      });
    });
  });
});
