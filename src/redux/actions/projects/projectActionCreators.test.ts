import {
  CreateProjectAction,
  EditProjectAction,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import { ProjectResponse } from "../../../types/projectTypes";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  editProjectActionCreator,
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
            id: "unetohunetoh",
            username: "kiv",
            avatar:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          },
          preview:
            "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
          likes: 0,
          production: "htttp://preview.com",
          repo: "http://repo.com",
        },
        {
          id: "2",
          author: {
            id: "unetohunetohtnh",
            username: "kiv",
            avatar:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          },
          preview:
            "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
          likes: 0,
          production: "htttp://preview.com",
          repo: "http://repo.com",
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
      const project: ProjectResponse = {
        id: "3",
        author: {
          id: "utnhentuhntaeoh",
          username: "jose",
          avatar:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        preview:
          "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
        likes: 0,
        production: "htttp://preview.com",
        repo: "http://repo.com",
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

describe("Given a editprojectActionCreator", () => {
  describe("When it's called with a project", () => {
    test("Then it should return an object with propecty type as edit project and the project", () => {
      const project: ProjectResponse = {
        likes: 0,
        production: "htttp://preview.com",
        repo: "http://repo.com",
        id: "3",
        author: {
          id: "sutnhtnuhsuah",
          username: "jose",
          avatar:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        preview:
          "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
      };
      const expectedAction: EditProjectAction = {
        project,
        type: projectActionTypes.editProject,
      };

      const action = editProjectActionCreator(project);

      expect(action).toEqual(expectedAction);
    });
  });
});
