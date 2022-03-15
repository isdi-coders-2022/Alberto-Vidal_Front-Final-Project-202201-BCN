/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  width: 400px;
  height: 600px;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
  & button {
    align-self: flex-start;
    &:active {
      transition: 0.3s all;
      transform: translateY(3px);
      opacity: 0.8;
    }
  }
`;

const UserForm = ({ isLogin, onSubmit }: UserFormProps): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<LoginUserFormData | RegisterUserFormData>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!isLogin && (
        <>
          <Controller
            name="avatar"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField variant="outlined" {...field} label={field.name} />
            )}
          />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField variant="outlined" {...field} label={field.name} />
            )}
          />
        </>
      )}
      <Controller
        name="username"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField variant="outlined" {...field} label={field.name} />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField variant="outlined" {...field} label={field.name} />
        )}
      />

      <Button
        variant="contained"
        type="submit"
        disabled={
          isLogin
            ? !(dirtyFields.username && dirtyFields.password)
            : !(
                dirtyFields.username &&
                dirtyFields.password &&
                (dirtyFields as unknown as RegisterUserFormData).avatar &&
                (dirtyFields as unknown as RegisterUserFormData).name
              )
        }
      >
        {isLogin ? "log in" : "register"}
      </Button>
    </Form>
  );
};

export default UserForm;

export interface LoginUserFormData {
  username: string;
  password: string;
}

export interface RegisterUserFormData {
  username: string;
  name: string;
  password: string;
  avatar: string;
}

interface UserFormProps {
  isLogin?: boolean;
  onSubmit: (data: RegisterUserFormData | LoginUserFormData) => void;
}
