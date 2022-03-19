import {
  CreateProjectAction,
  EditProjectAction,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import { ProjectResponse } from "../../../types/projectTypes";
import projectActionTypes from "./projectActionTypes";

export const loadProjectsActionCreator = (
  projects: ProjectResponse[]
): TypeLoadProjectAction => ({
  type: projectActionTypes.loadProjects,
  projects,
});

export const deleteProjectActionCreator = (
  id: string
): TypeDeleteProjectAction => ({
  id,
  type: projectActionTypes.deleteProject,
});

export const createProjectActionCreator = (
  project: ProjectResponse
): CreateProjectAction => ({
  type: projectActionTypes.createProject,
  project,
});

export const editProjectActionCreator = (
  project: ProjectResponse
): EditProjectAction => ({
  type: projectActionTypes.editProject,
  project,
});
