import UserForm, { UserFormData } from "../components/UserForm/UserForm";

const Login = (): JSX.Element => {
  const onSubmit = (data: UserFormData) => data;

  return <UserForm isLogin onSubmit={onSubmit} />;
};

export default Login;
