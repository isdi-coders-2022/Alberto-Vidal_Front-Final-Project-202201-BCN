import { useDispatch } from "react-redux";
import NewProject, {
  ProjectFormData,
} from "../components/ProjectForm/ProjectForm";
import { createProjectThunk } from "../redux/thunks/project/projectThunks";

const CreateNewProject = (): JSX.Element => {
  const dispatch = useDispatch();
  const onSubmit = (data: ProjectFormData) => {
    dispatch(createProjectThunk(data));
  };
  return <NewProject onSubmit={onSubmit} />;
};

export default CreateNewProject;
