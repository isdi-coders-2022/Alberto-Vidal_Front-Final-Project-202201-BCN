import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import jwtDecode from "jwt-decode";
import { ProjectFormData } from "../../../components/NewProject/ProjectForm";
import {
  created,
  defaultToast,
  deleted,
  rejected,
  resolved,
  updated,
} from "../../../toastConfigs";
import {
  CreateProjectAction,
  EditProjectAction,
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../../actions/projects/projectActionCreators";
import { RootState } from "../../store";

export const loadProjectsThunk =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeLoadProjectAction>
  ): Promise<void> => {
    const notificationID = toast.loading("loading...", { ...defaultToast });
    const response = await fetch(`${process.env.VITE_API_URL}projects/all`);

    if (response.ok) {
      const { projects } = await response.json();
      dispatch(loadProjectsActionCreator(projects));
      toast.update(notificationID, {
        ...resolved,
      });
      return;
    }
    toast.update(notificationID, {});
  };

export const deleteProjectThunk =
  (id: string) =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeDeleteProjectAction>
  ): Promise<void> => {
    const notificationID = toast.loading("deleting...", { ...defaultToast });

    const response = await fetch(
      `${process.env.VITE_API_URL}projects/delete/${id}`,
      {
        method: "delete",
      }
    );

    if (response.ok) {
      dispatch(deleteProjectActionCreator(id));
      toast.update(notificationID, { ...deleted });
      return;
    }

    toast.update(notificationID, { ...rejected });
  };

export const editProjectThunk =
  (projectData: ProjectFormData) =>
  async (dispatch: ThunkDispatch<RootState, void, EditProjectAction>) => {
    const notificationID = toast.loading("updating...", {
      ...defaultToast,
    });
    const { id }: TokenContent = jwtDecode(
      localStorage.getItem("token") as string
    );

    const response = await fetch(`${process.env.VITE_API_URL}projects/edit`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...projectData, author: id }),
    });

    if (response.ok) {
      const createdProject = await response.json();
      dispatch(createProjectActionCreator(createdProject));
      toast.update(notificationID, { ...updated });
      return;
    }

    toast.update(notificationID, { ...rejected });
  };

export const createProjectThunk =
  (projectData: ProjectFormData) =>
  async (dispatch: ThunkDispatch<RootState, void, CreateProjectAction>) => {
    const notificationID = toast.loading("deleting...", {
      ...defaultToast,
    });

    const { id }: TokenContent = jwtDecode(
      localStorage.getItem("token") as string
    );

    const response = await fetch(`${process.env.VITE_API_URL}projects/new`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...projectData, author: id }),
    });

    if (response.ok) {
      const createdProject = await response.json();
      dispatch(createProjectActionCreator(createdProject));
      toast.update(notificationID, { ...created });
      return;
    }

    toast.update(notificationID, { ...rejected });
  };

interface TokenContent {
  avatar: string;
  username: string;
  name: string;
  id: string;
}
