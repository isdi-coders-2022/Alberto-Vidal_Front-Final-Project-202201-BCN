import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import jwtDecode from "jwt-decode";
import { NavigateFunction } from "react-router-dom";
import { ReactText } from "react";
import { ProjectFormData } from "../../../components/ProjectForm/ProjectForm";
import {
  created,
  credentials,
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
  editProjectActionCreator,
  loadProjectsActionCreator,
} from "../../actions/projects/projectActionCreators";
import { RootState } from "../../store";
import { ProjectResponse } from "../../../types/projectTypes";

export const loadProjectsThunk =
  (navigate: NavigateFunction) =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeLoadProjectAction>
  ): Promise<void> => {
    let notificationID;
    try {
      notificationID = toast.loading("loading...", { ...defaultToast });
      const response = await fetch(`${process.env.VITE_API_URL}projects/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const { projects } = await response.json();
        dispatch(loadProjectsActionCreator(projects));
        toast.update(notificationID, {
          ...resolved,
        });
        return;
      }

      if (
        response.status === 403 &&
        window.location.pathname !== "/register" &&
        window.location.pathname !== "/login"
      ) {
        navigate("/login");
        localStorage.removeItem("token");
        toast.update(notificationID, credentials);
        return;
      }
    } catch (error) {
      toast.update(notificationID as ReactText, rejected);
    }
  };

export const deleteProjectThunk =
  (id: string, navigate: NavigateFunction) =>
  async (
    dispatch: ThunkDispatch<RootState, void, TypeDeleteProjectAction>
  ): Promise<void> => {
    let notificationID;
    try {
      notificationID = toast.loading("deleting...", { ...defaultToast });
      const response = await fetch(
        `${process.env.VITE_API_URL}projects/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "delete",
        }
      );

      if (response.ok) {
        dispatch(deleteProjectActionCreator(id));
        toast.update(notificationID, { ...deleted });
        return;
      }
      if (
        response.status === 403 &&
        window.location.pathname !== "/register" &&
        window.location.pathname !== "/login"
      ) {
        navigate("/login");
        localStorage.removeItem("token");
        toast.update(notificationID, credentials);
        return;
      }
    } catch (error) {
      toast.update(notificationID as ReactText, { ...rejected });
    }
  };

export const editProjectThunk =
  (
    projectData: ProjectFormData,
    projectToEdit: ProjectResponse,
    navigate: NavigateFunction
  ) =>
  async (dispatch: ThunkDispatch<RootState, void, EditProjectAction>) => {
    const notificationID = toast.loading("updating...", {
      ...defaultToast,
    });
    const editedProject = new FormData();
    editedProject.append("preview", projectData.preview as Blob);
    editedProject.append("repo", projectData.repo);
    editedProject.append("production", projectData.production);
    editedProject.append("author", projectToEdit.author.id);
    editedProject.append("id", projectToEdit.id);
    editedProject.append("likes", `${projectToEdit.likes}`);

    const response = await fetch(`${process.env.VITE_API_URL}projects/edit`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: editedProject,
    });

    if (response.ok) {
      const createdProject = await response.json();
      dispatch(editProjectActionCreator(createdProject));
      navigate("/");
      toast.update(notificationID, { ...updated });
      return;
    }
    if (
      response.status === 403 &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    ) {
      navigate("/login");
      localStorage.removeItem("token");
      toast.update(notificationID, credentials);
      return;
    }

    toast.update(notificationID, { ...rejected });
  };

export const createProjectThunk =
  (projectData: ProjectFormData, navigate: NavigateFunction) =>
  async (dispatch: ThunkDispatch<RootState, void, CreateProjectAction>) => {
    const notificationID = toast.loading("deleting...", {
      ...defaultToast,
    });

    const { id }: TokenContent = jwtDecode(
      localStorage.getItem("token") as string
    );
    const newProject = new FormData();
    newProject.append("preview", projectData.preview as Blob);
    newProject.append("repo", projectData.repo);
    newProject.append("production", projectData.production);
    newProject.append("author", id);

    const response = await fetch(`${process.env.VITE_API_URL}projects/new`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: newProject,
    });

    if (response.ok) {
      const createdProject = await response.json();
      dispatch(createProjectActionCreator(createdProject));
      toast.update(notificationID, { ...created });
      navigate("/");
      return;
    }
    if (
      response.status === 403 &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    ) {
      navigate("/login");
      localStorage.removeItem("token");
      toast.update(notificationID, credentials);
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
