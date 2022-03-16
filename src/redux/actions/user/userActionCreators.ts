import { UserAction } from "../../../types/actionTypes";
import { Author } from "../../../types/projectTypes";
import userActionTypes from "./userActionTypes";

export const loadUserActionCreator = (user: Author): UserAction => ({
  type: userActionTypes.loadUser,
  user,
});

export const unloadUserActionCreator = (): UserAction => ({
  type: userActionTypes.unloadUser,
});
