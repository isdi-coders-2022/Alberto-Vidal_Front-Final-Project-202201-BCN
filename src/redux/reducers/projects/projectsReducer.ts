import { Action, TypeLoadProjectAction } from "../../../types/actionTypes";
import { ProjectShape } from "../../../types/projectTypes";
import projectActionTypes from "../../actions/projects/projectActionTypes";

const projectsReducer = (
  projects: ProjectShape[] = [],
  action: Action = {}
): ProjectShape[] => {
  let newProjects: ProjectShape[];

  switch (action.type) {
    case projectActionTypes.loadProjects:
      newProjects = (action as TypeLoadProjectAction).projects;
      break;
    default:
      newProjects = [...projects];
      break;
  }

  return newProjects;
};

export default projectsReducer;
