import { useDispatch } from "react-redux";
import NewProject, {
  ProjectFormData,
} from "../components/NewProject/ProjectForm";
import { editProjectThunk } from "../redux/thunks/project/projectThunks";

const EditProject = (): JSX.Element => {
  const dispatch = useDispatch();
  const onSubmit = (data: ProjectFormData) => {
    dispatch(editProjectThunk(data));
  };
  return <NewProject onSubmit={onSubmit} />;
};

export default EditProject;
