import { loadProjectsThunk } from "./projectThunks";

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
