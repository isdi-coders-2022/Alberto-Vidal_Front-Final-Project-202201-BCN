import {
  loginUserThunk,
  registerUserThunk,
  unloadUserThunk,
} from "./userThunks";
import { server } from "../../../mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode");
const mockLocalStorage = { setItem: jest.fn(), removeItem: jest.fn() };
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });
jest.mock("react-router-dom");

describe("Given a login user thunk", () => {
  describe("When it's called with a user", () => {
    test("Then it should call localStorage setitem and dispatch", async () => {
      const user = { username: "paco", password: "1234" };
      const dispatch = jest.fn();
      const navigate = jest.fn();

      const loginUser = loginUserThunk(user, navigate);
      await loginUser(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });
});

describe("Given a register user thunk", () => {
  describe("When it's called passing a user", () => {
    test("Then something", async () => {
      const avatar = {
        name: "image.png",
        size: 50000,
        type: "image/png",
      } as File;
      const user = {
        username: "paco",
        name: "paco",
        password: "1234",
        avatar,
      };

      const navigate = jest.fn();
      const registerUser = registerUserThunk(user, navigate);

      await registerUser();
    });
  });
});

describe("Given a unloadUser thunk", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch and localStorage removeitem method", () => {
      const unloadUser = unloadUserThunk();
      const dispatch = jest.fn();

      unloadUser(dispatch);

      expect(localStorage.removeItem).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
