import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import {
  defaultToast,
  deleted,
  rejected,
  resolved,
} from "../../../toastConfigs";
import {
  TypeDeleteProjectAction,
  TypeLoadProjectAction,
} from "../../../types/actionTypes";
import {
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
