/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
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
  const blankForm = isLogin
    ? {
        username: "",
        password: "",
      }
    : {
        username: "",
        password: "",
        name: "",
        avatar: null,
      };

  const [formData, setFormData] = useState(blankForm);

  const onDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files ? event.target.files.item(0) : null,
    });
  };

  const isFilled = Object.values(formData).every((input) => input !== "");

  return (
    <Form
      onSubmit={(event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit(formData);
      }}
    >
      {!isLogin && (
        <>
          <Button
            variant="outlined"
            component="label"
            color={formData.avatar ? "success" : "primary"}
          >
            Avatar (Upload File)
            <input id="avatar" onChange={onFileChange} type="file" hidden />
          </Button>
          <TextField
            onChange={onDataChange}
            variant="outlined"
            label="name"
            value={formData.name}
            id="name"
          />
        </>
      )}
      <TextField
        onChange={onDataChange}
        variant="outlined"
        label="username"
        value={formData.username}
        id="username"
      />
      <TextField
        onChange={onDataChange}
        type="password"
        variant="outlined"
        label="password"
        value={formData.password}
        id="password"
      />

      <SubmitGroup>
        {isLogin ? (
          <Link to="/register">not registred?</Link>
        ) : (
          <Link to="/login">already registred?</Link>
        )}

        <Button variant="contained" type="submit" disabled={!isFilled}>
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
  avatar?: File | null;
}

interface UserFormProps {
  isLogin?: boolean;
  onSubmit: (data: UserFormData) => void;
}
