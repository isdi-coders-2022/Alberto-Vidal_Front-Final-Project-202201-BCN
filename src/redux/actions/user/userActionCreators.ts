import { UserAction } from "../../../types/actionTypes";
import { Author } from "../../../types/projectTypes";
import userActionTypes from "./userActionTypes";

export const loginUserActionCreator = (user: Author): UserAction => ({
  type: userActionTypes.loginUser,
  user,
});

export const registerUserActionCreator = (user: Author): UserAction => ({
  type: userActionTypes.registerUser,
  user,
});
