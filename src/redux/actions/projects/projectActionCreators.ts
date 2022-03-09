import { Action } from "../../../types/actionTypes";
import projectActionTypes from "./projectActionTypes";

// eslint-disable-next-line import/prefer-default-export
export const loadProjectsActionCreator = (): Action => ({
  type: projectActionTypes.loadProjects,
});
