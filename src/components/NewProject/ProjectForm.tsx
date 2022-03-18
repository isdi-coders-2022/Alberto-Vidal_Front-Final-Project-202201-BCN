/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const NewProjectForm = styled.form`
  display: flex;
  margin: 0 auto;
  width: 400px;
  height: 600px;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
  & .form-control {
    position: relative;
    display: flex;
    flex-direction: column;

    & .error-message {
      color: #bf1650;
      position: absolute;
      top: 58px;

      &::before {
        display: inline;
        content: "⚠ ";
      }
    }
  }
  & button {
    align-self: flex-start;
    &:active {
      transition: 0.3s all;
      transform: translateY(3px);
      border: 1px solid transparent;
      opacity: 0.8;
    }
  }
`;

const NewProject = ({ onSubmit }: NewProjectProps): JSX.Element => {
  const blankForm: ProjectFormData = {
    preview: "",
    repo: "",
    production: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<ProjectFormData>({
    defaultValues: blankForm,
  });

  const isValidUrl = /((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/g;

  return (
    <NewProjectForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="preview"
        control={control}
        render={({ field }) => (
          <TextField variant="outlined" {...field} label={field.name} />
        )}
      />
      <div className="form-control">
        <Controller
          name="repo"
          control={control}
          render={({ field }) => (
            <TextField variant="outlined" {...field} label={field.name} />
          )}
          rules={{ pattern: isValidUrl }}
        />
        {errors.repo && errors.repo.type ? (
          <p className="error-message">repo must be a valid URL</p>
        ) : null}
      </div>
      <div className="form-control">
        <Controller
          name="production"
          control={control}
          render={({ field }) => (
            <TextField variant="outlined" {...field} label={field.name} />
          )}
          rules={{ pattern: isValidUrl }}
        />
        {errors.production && errors.production.type ? (
          <p className="error-message">production must be a valid URL</p>
        ) : null}
      </div>
      <Button
        variant="contained"
        type="submit"
        disabled={
          !(dirtyFields.preview && dirtyFields.production && dirtyFields.repo)
        }
      >
        Submit
      </Button>
    </NewProjectForm>
  );
};

export default NewProject;

interface NewProjectProps {
  onSubmit: (data: ProjectFormData) => void;
}

export interface ProjectFormData {
  preview: string;
  repo: string;
  production: string;
}
