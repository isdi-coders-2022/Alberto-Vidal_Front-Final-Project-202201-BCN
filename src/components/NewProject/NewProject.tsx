import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const NewProjectForm = styled.form``;

const NewProject = ({ onSubmit }: NewProjectProps): JSX.Element => {
  const blankForm: NewProjectFormData = {
    preview: "",
    repo: "",
    production: "",
  };

  const [newProject, setNewProject] = useState(blankForm);

  const onFormChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setNewProject({ ...newProject, [event.target.id]: event.target.value });
  };

  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const isFilled =
    newProject.preview && newProject.production && newProject.repo;
  const isValidUrl = /((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/gi;

  const isOk =
    isFilled &&
    isValidUrl.test(newProject.production) &&
    isValidUrl.test(newProject.repo);

  return (
    <NewProjectForm onSubmit={onFormSubmit}>
      <TextField
        variant="outlined"
        label="preview"
        id="preview"
        onChange={onFormChange}
        value={newProject.preview}
      />
      <TextField
        variant="outlined"
        label="repo"
        id="repo"
        onChange={onFormChange}
        value={newProject.repo}
      />
      <TextField
        variant="outlined"
        label="production"
        id="production"
        onChange={onFormChange}
        value={newProject.production}
      />
      <Button variant="contained" type="submit" disabled={!isOk}>
        Submit
      </Button>
    </NewProjectForm>
  );
};

export default NewProject;

interface NewProjectProps {
  onSubmit: (data: NewProjectFormData) => void;
}

export interface NewProjectFormData {
  preview: string;
  repo: string;
  production: string;
}
