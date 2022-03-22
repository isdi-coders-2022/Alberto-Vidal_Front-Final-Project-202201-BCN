import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProjectForm, {
  ProjectFormData,
} from "../components/ProjectForm/ProjectForm";
import { createProjectThunk } from "../redux/thunks/project/projectThunks";

const CreateNewProject = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data: ProjectFormData) => {
    dispatch(createProjectThunk({ ...data }, navigate));
  };
  return <ProjectForm onSubmit={onSubmit} />;
};

export default CreateNewProject;
