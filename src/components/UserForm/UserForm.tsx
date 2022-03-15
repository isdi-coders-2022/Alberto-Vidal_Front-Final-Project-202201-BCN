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

const UserForm = ({ isLogin }: UserFormProps): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<LoginUserFormData | RegisterUserFormData>();

  return (
    <Form onSubmit={handleSubmit((data) => data)}>
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
      {!isLogin && (
        <>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField variant="outlined" {...field} label={field.name} />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField variant="outlined" {...field} label={field.name} />
            )}
          />
        </>
      )}
      <Button
        variant="contained"
        type="submit"
        disabled={!(dirtyFields.username && dirtyFields.password)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;

interface LoginUserFormData {
  username: string;
  password: string;
}

interface RegisterUserFormData {
  username: string;
  name: string;
  password: string;
  avatar: string;
}

interface UserFormProps {
  isLogin: boolean;
}
