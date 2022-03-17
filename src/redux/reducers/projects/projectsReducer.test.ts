import { ProjectShape } from "../../../types/projectTypes";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../../actions/projects/projectActionCreators";
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
      const action = loadProjectsActionCreator(newProjects);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(newProjects);
    });
  });

  describe("When it's called the current projects and an action with type delete project with a matching id", () => {
    test("Then it should return a new state without the matching project", () => {
      const id = "2";
      const actualProjects = [
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
      const newProjects = [
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
      ];
      const action = deleteProjectActionCreator(id);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(newProjects);
    });
  });

  describe("When it's called with the current projects and an action with type create and a project", () => {
    test("Then it should return a new projects state with booth the previous projects and the new one", () => {
      const actualProjects = [
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
      const newProject: ProjectShape = {
        id: "3",
        author: {
          username: "jose",
          avatar:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        preview:
          "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
      };
      const expectedProjects = [...actualProjects, newProject];

      const action = createProjectActionCreator(newProject);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(expectedProjects);
    });
  });
});
