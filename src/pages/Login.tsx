import { useDispatch } from "react-redux";
import UserForm, { UserFormData } from "../components/UserForm/UserForm";
import { loginUserThunk } from "../redux/thunks/user/userThunks";

const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const onSubmit = (user: UserFormData) => {
    dispatch(loginUserThunk(user));
  };

  return <UserForm isLogin onSubmit={onSubmit} />;
};

export default Login;
