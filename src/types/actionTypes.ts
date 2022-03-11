import { ProjectShape } from "./projectTypes";

export interface Action {
  type: string;
}
export interface TypeLoadProjectAction extends Action {
  projects: ProjectShape[];
}
