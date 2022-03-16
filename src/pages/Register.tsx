import { useDispatch } from "react-redux";
import UserForm, { UserFormData } from "../components/UserForm/UserForm";
import { registerUserThunk } from "../redux/thunks/user/userThunks";

const Register = (): JSX.Element => {
  const dispatch = useDispatch();
  const onSubmit = (user: UserFormData) => {
    dispatch(registerUserThunk(user));
  };

  return <UserForm onSubmit={onSubmit} />;
};

export default Register;
