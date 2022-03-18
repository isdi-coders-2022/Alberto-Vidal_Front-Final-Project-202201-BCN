import { ToastContainer } from "react-toastify";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as reactRedux from "react-redux";
import store from "../redux/store";
import CreateNewProject from "./CreateNewProject";
import { createProjectThunk } from "../redux/thunks/project/projectThunks";

afterAll(() => jest.resetAllMocks());
const mockLocalStorage = {
  getItem: () =>
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

describe("Given a Create New Project page", () => {
  describe("When it's rendered, filled all the fields in the form and click the submit button", () => {
    test("Then the function dispatch should be called", async () => {
      const mockDispatch = jest
        .fn()
        .mockImplementationOnce((project) => createProjectThunk(project));
      useDispatchMock.mockImplementationOnce(() => mockDispatch);
      const labels = [/repo/i, /production/i, /preview/i];
      const textToWrite = "http://something.com";
      const submitButtonName = /submit/i;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateNewProject />
          </Provider>
        </BrowserRouter>
      );
      const formImputs = labels.map((label) => screen.getByLabelText(label));
      formImputs.forEach((imput) => userEvent.type(imput, textToWrite));
      const submitButton = screen.getByRole("button", {
        name: submitButtonName,
      });
      userEvent.click(submitButton);

      await waitFor(() => expect(mockDispatch).toHaveBeenCalled());
    });
  });
});
