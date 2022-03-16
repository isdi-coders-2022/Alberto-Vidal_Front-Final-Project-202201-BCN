import { EmptyObject } from "react-hook-form";
import { LoadUserAction } from "../../../types/actionTypes";
import { Author } from "../../../types/projectTypes";
import userActionTypes from "../../actions/user/userActionTypes";

const defaultUser: Author = {
  avatar: "",
  id: "",
  username: "",
};

const userReducer = (
  user: Author = defaultUser,
  action: LoadUserAction | EmptyObject = {}
): Author => {
  let newUser: Author;

  switch (action.type) {
    case userActionTypes.loadUser:
      newUser = { ...(action as LoadUserAction).user };
      break;

    case userActionTypes.unloadUser:
      newUser = { ...defaultUser };
      break;

    default:
      newUser = { ...user };
      break;
  }

  return newUser;
};

export default userReducer;
