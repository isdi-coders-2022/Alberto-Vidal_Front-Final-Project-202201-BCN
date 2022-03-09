import { TypeLoadProjectAction } from "../../../types/actionTypes";
import { loadProjectsActionCreator } from "./projectActionCreators";
import projectActionTypes from "./projectActionTypes";

describe("Given a load project action creator", () => {
  describe("When it's invoked passing an array of projects", () => {
    test("Then it should return an action with type load projects and those projects", () => {
      const projects = [
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
      const expectedAction: TypeLoadProjectAction = {
        type: projectActionTypes.loadProjects,
        projects,
      };

      const action = loadProjectsActionCreator(projects);

      expect(action).toEqual(expectedAction);
    });
  });
});
