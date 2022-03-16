import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserForm, { UserFormData } from "../components/UserForm/UserForm";
import { loginUserThunk } from "../redux/thunks/user/userThunks";

const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (user: UserFormData) => {
    dispatch(loginUserThunk(user, navigate));
  };

  return <UserForm isLogin onSubmit={onSubmit} />;
};

export default Login;
