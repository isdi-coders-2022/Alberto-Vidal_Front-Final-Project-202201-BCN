import { useDispatch } from "react-redux";
import NewProject, {
  NewProjectFormData,
} from "../components/NewProject/NewProject";
import { createProjectThunk } from "../redux/thunks/project/projectThunks";

const CreateNewProject = (): JSX.Element => {
  const dispatch = useDispatch();
  const onSubmit = (data: NewProjectFormData) => {
    dispatch(createProjectThunk(data));
  };
  return <NewProject onSubmit={onSubmit} />;
};

export default CreateNewProject;
