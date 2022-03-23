import { toast } from "react-toastify";
import { deleteProjectActionCreator } from "../../actions/projects/projectActionCreators";
import {
  deleteProjectThunk,
  editProjectThunk,
  loadProjectsThunk,
} from "../project/projectThunks";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import { credentials, rejected } from "../../../toastConfigs";
import { ProjectFormData } from "../../../components/ProjectForm/ProjectForm";
import { ProjectResponse } from "../../../types/projectTypes";
import { generateRandomProject } from "../../../mocks/projects";

const mockLocalStorage = {
  removeItem: jest.fn(),
  getItem: () => "faketoken",
};
Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

const mockToastUpdate = jest.spyOn(toast, "update");
const toastId = "toast";
jest.spyOn(toast, "loading").mockImplementation(() => toastId);
beforeAll(() => server.listen());
afterEach(() => {
  mockLocalStorage.removeItem.mockReset();
  mockToastUpdate.mockReset();
  server.resetHandlers();
});
afterAll(() => server.close());

describe("Given a load projects thunk", () => {
  describe("When it's called", () => {
    test("Then if the response is ok it should call function dispatch with the returned projects from the api", async () => {
      const navigate = jest.fn();
      const expectedProjectsLenght = 5;
      const dispatch = jest.fn();

      const loadProjects = loadProjectsThunk(navigate);
      await loadProjects(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0].projects).toHaveLength(
        expectedProjectsLenght
      );
    });
  });

  describe("When it's called and receives a 403", () => {
    test("Then it should call navigate, toast update with credentials config and clear the token from localStorage", async () => {
      server.use(...errorHandlers);
      const navigate = jest.fn();
      const expectedDestination = "/login";
      const dispatch = () => null;

      const loadProjects = loadProjectsThunk(navigate);
      await loadProjects(dispatch);

      expect(mockToastUpdate).toHaveBeenCalledWith(toastId, credentials);
      expect(navigate).toHaveBeenCalledWith(expectedDestination);
      expect(mockLocalStorage.removeItem).toHaveBeenCalled();
    });
  });

  describe("When an error occurs", () => {
    test("Then it should call toast update with rejected config", async () => {
      const dispatch = () => {
        throw new Error();
      };
      const navigate = () => null;

      const loadProjects = loadProjectsThunk(navigate);
      await loadProjects(dispatch);

      expect(mockToastUpdate).toHaveBeenCalledWith(toastId, rejected);
    });
  });
});

describe("Given a delete project thunk", () => {
  describe("When it's called passing an id", () => {
    test("Then if the response is ok it should call the function dispatch with a delete project action with the id", async () => {
      const id = "asdasd";
      const navigate = jest.fn();
      const action = deleteProjectActionCreator(id);
      const dispatch = jest.fn();

      const deleteProject = deleteProjectThunk(id, navigate);
      await deleteProject(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it receives a 403 as response", () => {
    test("Then it should call toast update with credentials config, navigate to login and localStorage removeitem", async () => {
      server.use(...errorHandlers);
      const navigate = jest.fn();
      const expectedDestination = "/login";
      const id = "utoehtnuh";
      const dispatch = () => null;

      const deleteProject = deleteProjectThunk(id, navigate);
      await deleteProject(dispatch);

      expect(mockToastUpdate).toHaveBeenCalledWith(toastId, credentials);
      expect(navigate).toHaveBeenCalledWith(expectedDestination);
      expect(mockLocalStorage.removeItem).toHaveBeenCalled();
    });
  });

  describe("When an error occurs", () => {
    test("Then it should call toasd update with rejected config", async () => {
      const dispatch = () => {
        throw new Error();
      };
      const navigate = () => null;
      const id = "utnheotnuh";

      const deleteProject = deleteProjectThunk(id, navigate);
      await deleteProject(dispatch);

      expect(mockToastUpdate).toHaveBeenCalledWith(toastId, rejected);
    });
  });
});

describe("Given an editProjectThunk", () => {
  describe("When it's called with navigate, project formData, and a project to update", () => {
    test("Then if the response resolves ok it should call dispatch with editproject action, navigate to '/', and toast update", async () => {
      const expectedDestination = "/";
      const navigate = jest.fn();
      const dispatch = jest.fn();
      const preview = {} as File;
      const projectData: ProjectFormData = {
        preview,
        production: "nutohenut",
        repo: "stnuhenot",
      };
      const projectToEdit: ProjectResponse = generateRandomProject();

      const editProject = editProjectThunk(
        projectData,
        projectToEdit,
        navigate
      );
      await editProject(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalledWith(expectedDestination);
    });
  });

  describe("When it's called and an error occurs", () => {
    test("Then it should call toast update with rejected config", async () => {
      const preview = {} as File;
      const projectData: ProjectFormData = {
        preview,
        production: "nutohenut",
        repo: "stnuhenot",
      };
      const projectToEdit: ProjectResponse = generateRandomProject();

      const dispatch = () => {
        throw new Error();
      };
      const navigate = () => null;

      const editProject = editProjectThunk(
        projectData,
        projectToEdit,
        navigate
      );
      await editProject(dispatch);

      expect(mockToastUpdate).toHaveBeenCalledWith(toastId, rejected);
    });
  });

  describe("When it's called and the respond has status 402", () => {
    test("Then it should call navigate to login, toast update with credentials settings, and localstorage removeItem", async () => {
      server.use(...errorHandlers);
      const preview = {} as File;
      const projectData: ProjectFormData = {
        preview,
        production: "nutohenut",
        repo: "stnuhenot",
      };
      const projectToEdit: ProjectResponse = generateRandomProject();
      const expectedDestination = "/login";
      const dispatch = () => null;
      const navigate = jest.fn();

      const editProject = editProjectThunk(
        projectData,
        projectToEdit,
        navigate
      );
      await editProject(dispatch);

      expect(navigate).toHaveBeenCalledWith(expectedDestination);
      expect(mockToastUpdate).toHaveBeenCalledWith(toastId, credentials);
      expect(mockLocalStorage.removeItem).toHaveBeenCalled();
    });
  });
});
