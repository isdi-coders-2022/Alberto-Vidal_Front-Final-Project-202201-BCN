import {
  loadUserActionCreator,
  unloadUserActionCreator,
} from "./userActionCreators";
import userActionTypes from "./userActionTypes";

describe("Given a loadUserActionCreator", () => {
  describe("When it's called with a user", () => {
    test("Then it should return an object with type loaduser and the user", () => {
      const user = {
        username: "paco",
        id: "utnaehutnshu",
        avatar: "image.png",
      };
      const expectedAciton = {
        type: userActionTypes.loadUser,
        user,
      };

      const action = loadUserActionCreator(user);

      expect(action).toEqual(expectedAciton);
    });
  });
});

describe("Given a unload user action creator", () => {
  describe("When it's called with a user", () => {
    test("Then it should return an object with type unload user", () => {
      const expectedAciton = {
        type: userActionTypes.unloadUser,
      };

      const action = unloadUserActionCreator();

      expect(action).toEqual(expectedAciton);
    });
  });
});
