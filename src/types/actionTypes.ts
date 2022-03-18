import { Author, ProjectShape } from "./projectTypes";

export interface Action {
  type: string;
}
export interface TypeLoadProjectAction extends Action {
  projects: ProjectShape[];
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
  project: ProjectShape;
}

export interface EditProjectAction extends Action {
  project: ProjectShape;
}

export interface LoadUserAction extends Action {
  user: Author;
}
