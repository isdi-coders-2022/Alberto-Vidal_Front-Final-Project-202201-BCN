import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as redux from "react-redux";
import EditProject from "./EditProject";
import { generateRandomProjects } from "../mocks/projects";
import store from "../redux/store";

const mockDispatch = jest.fn();
jest.spyOn(redux, "useDispatch").mockImplementation(() => mockDispatch);

const projects = generateRandomProjects(1);

const projectId = projects[0].id;

jest.spyOn(redux, "useSelector").mockImplementation(() => projects);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: projectId,
  }),
  useNavigate: () => mockNavigate,
}));

describe("Given an editProject page", () => {
  describe("When it's rendered passing an existing project id as url param", () => {
    test("Then it should render a form that calls dispatch on submit", async () => {
      render(
        <redux.Provider store={store}>
          <EditProject />
        </redux.Provider>
      );
      const button = screen.getByRole("button", { name: /submit/i });
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
