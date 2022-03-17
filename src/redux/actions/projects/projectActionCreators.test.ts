import {
  CreateProjectAction,
  CreateProjectActionProps,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import { ProjectShape } from "../../../types/projectTypes";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "./projectActionCreators";
import projectActionTypes from "./projectActionTypes";

describe("Given a load project action creator", () => {
  describe("When it's invoked passing an array of projects", () => {
    test("Then it should return an action with type load projects and those projects", () => {
      const projects = [
        {
          id: "1",
          author: {
            username: "kiv",
            avatar:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          },
          preview:
            "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
        },
        {
          id: "2",
          author: {
            username: "kiv",
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

describe("Given a deleteProjectActionCreator", () => {
  describe("When it's called passing an id", () => {
    test("Then it should return an object with type delete project and the id", () => {
      const id = "astastasha3";
      const expectedAction = {
        id,
        type: projectActionTypes.deleteProject,
      };

      const action = deleteProjectActionCreator(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createProject action creator", () => {
  describe("When it's called passing a project", () => {
    test("Then it should return an action with type create project and the project", () => {
      const project: ProjectShape = {
        id: "3",
        author: {
          username: "jose",
          avatar:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        preview:
          "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
      };
      const expectedAction: CreateProjectAction = {
        project,
        type: projectActionTypes.createProject,
      };

      const action = createProjectActionCreator(project);

      expect(action).toEqual(expectedAction);
    });
  });
});
