import { Action, LoadUserAction } from "../../../types/actionTypes";
import { Author } from "../../../types/projectTypes";
import userActionTypes from "./userActionTypes";

export const loadUserActionCreator = (user: Author): LoadUserAction => ({
  type: userActionTypes.loadUser,
  user,
});

export const unloadUserActionCreator = (): Action => ({
  type: userActionTypes.unloadUser,
});
