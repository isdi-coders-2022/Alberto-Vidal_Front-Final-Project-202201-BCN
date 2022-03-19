import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NewProject, {
  ProjectFormData,
} from "../components/ProjectForm/ProjectForm";
import { RootState } from "../redux/store";
import { editProjectThunk } from "../redux/thunks/project/projectThunks";
import { ProjectResponse } from "../types/projectTypes";

const EditProject = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const projects = useSelector((state: RootState) => state.projects);
  const projectToEdit = projects.find((project) => project.id === id);
  const onSubmit = (data: ProjectFormData) => {
    dispatch(
      editProjectThunk(data, projectToEdit as ProjectResponse, navigate)
    );
  };
  return (
    <NewProject
      onSubmit={onSubmit}
      project={projectToEdit as ProjectFormData}
    />
  );
};

export default EditProject;