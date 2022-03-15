import { EmptyObject } from "redux";
import {
  Action,
  ProjectCard,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/projectTypes";
import projectActionTypes from "../../actions/projects/projectActionTypes";

const projectsReducer = (
  projects: ProjectCard[] = [],
  action: Action | EmptyObject = {}
): ProjectCard[] => {
  let newProjects: ProjectCard[];

  switch ((action as Action).type) {
    case projectActionTypes.loadProjects:
      newProjects = (action as TypeLoadProjectAction).projects;
      break;

    case projectActionTypes.deleteProject:
      newProjects = projects.filter(
        (project) => project.id !== (action as TypeDeleteProjectAction).id
      );
      break;

    default:
      newProjects = [...projects];
      break;
  }

  return newProjects;
};

export default projectsReducer;
