import {
  CreateProjectAction,
  EditProjectAction,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import { ProjectShape } from "../../../types/projectTypes";
import projectActionTypes from "./projectActionTypes";

export const loadProjectsActionCreator = (
  projects: ProjectShape[]
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
  project: ProjectShape
): CreateProjectAction => ({
  type: projectActionTypes.createProject,
  project,
});

export const editProjectActionCreator = (
  project: ProjectShape
): EditProjectAction => ({
  type: projectActionTypes.editProject,
  project,
});
