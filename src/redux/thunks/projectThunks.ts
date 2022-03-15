// https://projectsnap.onrender.com/projects/all

import { ThunkDispatch } from "redux-thunk";
import {
  CreateProjectThunkProps,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../types/projectTypes";
import {
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../actions/projects/projectActionCreators";
import { RootState } from "../store";

// eslint-disable-next-line import/prefer-default-export
export const loadProjectsThunk =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeLoadProjectAction>
  ): Promise<void> => {
    const response = await fetch(`${process.env.VITE_API_URL}projects/all`);

    if (response.ok) {
      const { projects } = await response.json();
      dispatch(loadProjectsActionCreator(projects));
    }
  };

export const deleteProjectThunk =
  (id: string) =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeDeleteProjectAction>
  ): Promise<void> => {
    const response = await fetch(
      `${process.env.VITE_API_URL}projects/delete/${id}`,
      {
        method: "delete",
      }
    );

    if (response.ok) {
      dispatch(deleteProjectActionCreator(id));
    }
  };

export const createProjectThunk =
  (project: CreateProjectThunkProps) =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeDeleteProjectAction>
  ): Promise<void> => {
    const response = await fetch(`${process.env.VITE_API_URL}projects/new`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if(response.ok) {
      const projectWithId:  = await response.json()
    }
  };
