import { ProjectShape } from "../../../types/projectTypes";
import { loadProjectsActionCreator } from "../../actions/projects/projectActionCreators";
import projectsReducer from "./projectsReducer";

describe("Given a projects reducer", () => {
  describe("When it's called with no action and no projects", () => {
    test("Then it should return a new state equal to an empty array", () => {
      const expectedNewState: ProjectShape[] = [];

      const newState = projectsReducer();

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called the current projects and an action with type load projects with payload such as an array of 2 projects", () => {
    test("Then it should return a new state equal to the prjects in the action", () => {
      const actualProjects: ProjectShape[] = [];
      const newProjects = [
        {
          id: "1",
          author: {
            name: "kiv",
            avatar:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          },
          preview:
            "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
        },
        {
          id: "2",
          author: {
            name: "kiv",
            avatar:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          },
          preview:
            "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
        },
      ];
      const action = loadProjectsActionCreator(newProjects);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(newProjects);
    });
  });
});
