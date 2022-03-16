/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
`;

const SubmitGroup = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    align-self: flex-start;
    &:active {
      transition: 0.3s all;
      transform: translateY(3px);
      opacity: 0.8;
    }
  }
  & a {
    color: inherit;
    margin-bottom: 10px;
  }
`;

const UserForm = ({ isLogin, onSubmit }: UserFormProps): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<UserFormData>();

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
          <TextField
            type="password"
            variant="outlined"
            {...field}
            label={field.name}
          />
        )}
      />

      <SubmitGroup>
        {isLogin ? (
          <Link to="/register">not registred?</Link>
        ) : (
          <Link to="/login">already registred?</Link>
        )}

        <Button
          variant="contained"
          type="submit"
          disabled={
            isLogin
              ? !(dirtyFields.username && dirtyFields.password)
              : !(
                  dirtyFields.username &&
                  dirtyFields.password &&
                  dirtyFields.avatar &&
                  dirtyFields.name
                )
          }
        >
          {isLogin ? "log in" : "register"}
        </Button>
      </SubmitGroup>
    </Form>
  );
};

export default UserForm;
export interface UserFormData {
  username: string;
  name?: string;
  password: string;
  avatar?: string;
}

interface UserFormProps {
  isLogin?: boolean;
  onSubmit: (data: UserFormData) => void;
}
