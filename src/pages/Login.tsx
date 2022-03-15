import UserForm, { LoginUserFormData } from "../components/UserForm/UserForm";

const Login = (): JSX.Element => {
  const onSubmit = (data: LoginUserFormData) => data;

  return <UserForm isLogin onSubmit={onSubmit} />;
};

export default Login;
