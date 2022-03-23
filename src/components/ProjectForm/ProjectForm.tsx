/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectResponse } from "../../types/projectTypes";

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
    preview: null,
    repo: "",
    production: "",
  };

  const [formData, setFormData] = useState(project ?? blankForm);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files ? event.target.files.item(0) : null,
    });
  };

  const onDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (project) {
      setFormData({ ...project });
    }
  }, [project]);

  const isValidUrl = /((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/;
  const isFilled = Object.values(formData).every((input) => input !== "");
  const isDisabled = !isFilled;

  return (
    <NewProjectForm
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData as ProjectFormData);
      }}
    >
      <Button
        variant="outlined"
        component="label"
        color={formData.preview ? "success" : "primary"}
      >
        Preview (Upload File)
        <input id="preview" onChange={onFileChange} type="file" hidden />
      </Button>

      <div className="form-control">
        <TextField
          variant="outlined"
          value={formData.production}
          onChange={onDataChange}
          label="production"
          id="production"
        />
        {formData.production && !isValidUrl.test(formData.production) ? (
          <p className="error-message">repo must be a valid URL</p>
        ) : null}
      </div>

      <div className="form-control">
        <TextField
          variant="outlined"
          onChange={onDataChange}
          value={formData.repo}
          label="repo"
          id="repo"
        />
        {formData.repo && !isValidUrl.test(formData.repo) ? (
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

export interface NewProjectProps {
  onSubmit: (data: ProjectFormData) => void;
  project?: ProjectFormData | ProjectResponse;
}

export interface ProjectFormData {
  preview: File | null;
  repo: string;
  production: string;
}
