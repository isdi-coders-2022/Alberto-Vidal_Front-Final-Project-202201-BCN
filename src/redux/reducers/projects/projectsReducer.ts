import { EmptyObject } from "redux";
import {
  Action,
  CreateProjectAction,
  EditProjectAction,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import { ProjectResponse } from "../../../types/projectTypes";
import projectActionTypes from "../../actions/projects/projectActionTypes";

const projectsReducer = (
  projects: ProjectResponse[] = [],
  action: Action | EmptyObject = {}
): ProjectResponse[] => {
  let newProjects: ProjectResponse[];

  switch ((action as Action).type) {
    case projectActionTypes.loadProjects:
      newProjects = (action as TypeLoadProjectAction).projects;
      break;

    case projectActionTypes.deleteProject:
      newProjects = projects.filter(
        (project) => project.id !== (action as TypeDeleteProjectAction).id
      );
      break;

    case projectActionTypes.createProject:
      newProjects = [...projects, (action as CreateProjectAction).project];
      break;

    case projectActionTypes.editProject:
      newProjects = projects.map((project) =>
        project.id === (action as EditProjectAction).project.id
          ? (action as EditProjectAction).project
          : project
      );
      break;

    default:
      newProjects = [...projects];
      break;
  }

  return newProjects;
};

export default projectsReducer;
