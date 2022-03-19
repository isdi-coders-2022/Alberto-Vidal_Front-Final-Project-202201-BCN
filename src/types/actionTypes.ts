import { Author, ProjectResponse } from "./projectTypes";

export interface Action {
  type: string;
}
export interface TypeLoadProjectAction extends Action {
  projects: ProjectResponse[];
}

export interface TypeDeleteProjectAction extends Action {
  id: string;
}

export interface CreateProjectActionProps {
  author: string;
  preview: string;
  repo: string;
  production: string;
}

export interface CreateProjectAction extends Action {
  project: ProjectResponse;
}

export interface EditProjectAction extends Action {
  project: ProjectResponse;
}

export interface LoadUserAction extends Action {
  user: Author;
}
