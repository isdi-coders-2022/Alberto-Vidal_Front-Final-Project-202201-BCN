import { TypeLoadProjectAction } from "../../../types/actionTypes";
import { ProjectShape } from "../../../types/projectTypes";
import projectActionTypes from "./projectActionTypes";

// eslint-disable-next-line import/prefer-default-export
export const loadProjectsActionCreator = (
  projects: ProjectShape[]
): TypeLoadProjectAction => ({
  type: projectActionTypes.loadProjects,
  projects,
});
