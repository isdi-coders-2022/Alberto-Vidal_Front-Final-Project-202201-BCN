/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
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

const ProjectForm = ({ onSubmit, project }: NewProjectProps): JSX.Element => {
  const blankForm: ProjectFormData = {
    preview: "",
    repo: "",
    production: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, submitCount },
    setValue,
    watch,
  } = useForm<ProjectFormData>({
    defaultValues: blankForm,
  });

  useEffect(() => {
    if (project) {
      setValue("preview", project.preview);
      setValue("repo", project.repo);
      setValue("production", project.production);
    }
  }, [project, setValue]);

  const isValidUrl = /((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/g;
  const formInputs = watch();
  const isFilled = Object.values(formInputs).every((imput) => imput !== "");
  const isDisabled = !isFilled || submitCount === 1;

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
      <Button variant="contained" type="submit" disabled={isDisabled}>
        Submit
      </Button>
    </NewProjectForm>
  );
};

export default ProjectForm;

interface NewProjectProps {
  onSubmit: (data: ProjectFormData) => void;
  project?: ProjectFormData;
}

export interface ProjectFormData {
  preview: string;
  repo: string;
  production: string;
}
