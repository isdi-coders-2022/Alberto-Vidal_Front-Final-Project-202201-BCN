import NewProject, {
  NewProjectFormData,
} from "../components/NewProject/NewProject";

const CreateNewProject = (): JSX.Element => {
  const onSubmit = (data: NewProjectFormData) => JSON.stringify(data);
  return <NewProject onSubmit={onSubmit} />;
};

export default CreateNewProject;
