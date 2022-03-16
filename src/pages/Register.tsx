import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserForm, { UserFormData } from "../components/UserForm/UserForm";
import { registerUserThunk } from "../redux/thunks/user/userThunks";

const Register = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (user: UserFormData) => {
    dispatch(registerUserThunk(user, navigate));
  };

  return <UserForm onSubmit={onSubmit} />;
};

export default Register;
