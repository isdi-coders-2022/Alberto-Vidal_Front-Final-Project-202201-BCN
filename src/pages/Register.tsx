import UserForm, { UserFormData } from "../components/UserForm/UserForm";

const Register = (): JSX.Element => {
  const onSubmit = (data: UserFormData) => data;

  return <UserForm onSubmit={onSubmit} />;
};

export default Register;
