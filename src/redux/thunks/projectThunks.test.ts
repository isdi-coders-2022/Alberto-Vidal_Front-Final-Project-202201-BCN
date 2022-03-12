import { deleteProjectActionCreator } from "../actions/projects/projectActionCreators";
import { deleteProjectThunk, loadProjectsThunk } from "./projectThunks";

describe("Given a load projects thunk", () => {
  describe("When it's called", () => {
    test("Then if the response is ok it should call function dispatch with the returned projects from the api", async () => {
      const loadProjects = loadProjectsThunk();
      const expectedProjectsLenght = 5;
      const dispatch = jest.fn();

      await loadProjects(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0].projects).toHaveLength(
        expectedProjectsLenght
      );
    });
  });
});

describe("Given a delete project thunk", () => {
  describe("When it's called passing an id", () => {
    test("Then if the response is ok it should call the function dispatch with a delete project action with the id", async () => {
      const id = "asdasd";
      const deleteProject = deleteProjectThunk(id);
      const action = deleteProjectActionCreator(id);
      const dispatch = jest.fn();

      await deleteProject(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
