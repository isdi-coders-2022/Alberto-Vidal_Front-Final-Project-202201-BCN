import { Action, LoadUserAction } from "../../../types/actionTypes";
import { Author } from "../../../types/projectTypes";
import userActionTypes from "../../actions/user/userActionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer", () => {
  const defaultUser: Author = {
    avatar: "",
    id: "",
    username: "",
  };
  const expectedUser: Author = {
    avatar: "image.png",
    id: "eutnahuseh",
    username: "paco",
  };
  describe("When it's called with no user nor action", () => {
    test("Then it should return a new user equal to a default user", () => {
      const user = userReducer();

      expect(user).toEqual(defaultUser);
    });
  });

  describe("When it's called with the default user and a action with type load and a user", () => {
    test("Then it should return a new user equal to the user in the action", () => {
      const action: LoadUserAction = {
        type: userActionTypes.loadUser,
        user: expectedUser,
      };

      const newUser = userReducer(defaultUser, action);

      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it's called with a user and an action with type unload", () => {
    test("Then it should return new user equal to default user", () => {
      const action: Action = {
        type: userActionTypes.unloadUser,
      };

      const newUser = userReducer(expectedUser, action);

      expect(newUser).toEqual(defaultUser);
    });
  });
});
