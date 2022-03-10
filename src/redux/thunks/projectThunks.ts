// https://projectsnap.onrender.com/projects/all

import { ThunkDispatch } from "redux-thunk";
import { TypeLoadProjectAction } from "../../types/actionTypes";
import { loadProjectsActionCreator } from "../actions/projects/projectActionCreators";
import { RootState } from "../store";

// eslint-disable-next-line import/prefer-default-export
export const loadProjectsThunk =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeLoadProjectAction>
  ): Promise<void> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}projects/all`);

    if (response.ok) {
      const { projects } = await response.json();
      dispatch(loadProjectsActionCreator(projects));
    }
  };
