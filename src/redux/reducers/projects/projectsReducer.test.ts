import { ProjectResponse, ProjectShape } from "../../../types/projectTypes";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  editProjectActionCreator,
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
      const actualProjects: ProjectResponse[] = [];
      const newProjects: ProjectResponse[] = [
        {
          id: "1",
          author: {
            id: "utneh",
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
            id: "utneh",
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
      const action = loadProjectsActionCreator(newProjects);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(newProjects);
    });
  });

  describe("When it's called the current projects and an action with type delete project with a matching id", () => {
    test("Then it should return a new state without the matching project", () => {
      const id = "2";
      const actualProjects: ProjectResponse[] = [
        {
          id: "1",
          author: {
            id: "tueh",
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
            id: "tueh",
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
      const newProjects = [actualProjects[0]];
      const action = deleteProjectActionCreator(id);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(newProjects);
    });
  });

  describe("When it's called with the current projects and an action with type create and a project", () => {
    test("Then it should return a new projects state with booth the previous projects and the new one", () => {
      const actualProjects: ProjectResponse[] = [
        {
          id: "1",
          author: {
            id: "unteh",
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
            id: "unteh",
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
      const newProject: ProjectResponse = {
        id: "3",
        author: {
          id: "tnuh",
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
      const expectedProjects = [...actualProjects, newProject];

      const action = createProjectActionCreator(newProject);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(expectedProjects);
    });
  });

  describe("When it's called with the current projects and an action with type edit and a project", () => {
    test("Then it should return a new projects state with booth the previous projects and the new one", () => {
      const actualProjects = [
        {
          id: "1",
          author: {
            id: "unteho",
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
            id: "uth",
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
      const editedProject: ProjectResponse = {
        ...actualProjects[0],
        preview: "https://image.png",
      };
      const expectedProjects = [
        editedProject,
        {
          id: "2",
          author: {
            id: "uth",
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

      const action = editProjectActionCreator(editedProject);

      const newState = projectsReducer(actualProjects, action);

      expect(newState).toEqual(expectedProjects);
    });
  });
});
