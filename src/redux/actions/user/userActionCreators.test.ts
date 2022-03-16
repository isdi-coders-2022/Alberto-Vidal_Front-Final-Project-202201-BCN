import {
  loginUserActionCreator,
  registerUserActionCreator,
} from "./userActionCreators";
import userActionTypes from "./userActionTypes";

describe("Given a loginUserActionCreator", () => {
  describe("When it's called with a user", () => {
    test("Then it should return an object with type loginUser", () => {
      const user = {
        username: "paco",
        id: "utnaehutnshu",
        avatar: "image.png",
      };
      const expectedAciton = {
        type: userActionTypes.loginUser,
        user,
      };

      const action = loginUserActionCreator(user);

      expect(action).toEqual(expectedAciton);
    });
  });
});

describe("Given a register user action creator", () => {
  describe("When it's called with a user", () => {
    test("Then it should return an object with type register user and the user", () => {
      const user = {
        username: "paco",
        id: "utnaehutnshu",
        avatar: "image.png",
      };
      const expectedAciton = {
        type: userActionTypes.registerUser,
        user,
      };

      const action = registerUserActionCreator(user);

      expect(action).toEqual(expectedAciton);
    });
  });
});
