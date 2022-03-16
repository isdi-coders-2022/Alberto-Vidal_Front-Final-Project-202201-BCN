import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "../../../types/actionTypes";
import { Author } from "../../../types/projectTypes";
import {
  loadUserActionCreator,
  unloadUserActionCreator,
} from "../../actions/user/userActionCreators";
import { RootState } from "../../store";

export const registerUserThunk =
  (userData: User) =>
  async (dispatch: ThunkDispatch<RootState, void, Action>): Promise<void> => {
    const response = await fetch(`${process.env.VITE_API_URL}/user/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      Navigate({ to: "/login" });
    }
  };
export const loginUserThunk =
  (userData: User) =>
  async (dispatch: ThunkDispatch<RootState, void, Action>): Promise<void> => {
    const response = await fetch(`${process.env.VITE_API_URL}/user/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const { token } = await response.json();
      const user: Author = jwtDecode(token);
      dispatch(loadUserActionCreator(user));
      localStorage.setItem("token", token);
      Navigate({ to: "/" });
    }
  };

export const unloadUserThunk =
  () =>
  (dispatch: ThunkDispatch<RootState, void, Action>): void => {
    localStorage.removeItem("token");
    dispatch(unloadUserActionCreator());
  };

interface User {
  username: string;
  password: string;
  name?: string;
  avatar?: string;
}
