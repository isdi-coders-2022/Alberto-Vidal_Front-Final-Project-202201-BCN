import {
  CreateProjectAction,
  CreateProjectActionProps,
  ProjectCard,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/projectTypes";
import projectActionTypes from "./projectActionTypes";

export const loadProjectsActionCreator = (
  projects: ProjectCard[]
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
  project: CreateProjectActionProps
): CreateProjectAction => ({
  type: projectActionTypes.createProject,
  project,
});
