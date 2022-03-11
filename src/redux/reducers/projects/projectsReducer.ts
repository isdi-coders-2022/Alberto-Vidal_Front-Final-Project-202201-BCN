import { EmptyObject } from "redux";
import { Action, TypeLoadProjectAction } from "../../../types/actionTypes";
import { ProjectShape } from "../../../types/projectTypes";
import projectActionTypes from "../../actions/projects/projectActionTypes";

const projectsReducer = (
  projects: ProjectShape[] = [],
  action: Action | EmptyObject = {}
): ProjectShape[] => {
  let newProjects: ProjectShape[];

  switch ((action as Action).type) {
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
