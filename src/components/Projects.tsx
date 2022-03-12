import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteProjectThunk } from "../redux/thunks/projectThunks";
import { ProjectsProps } from "../types/projectTypes";
import Project from "./Project";

const ProjectsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  @media (min-width: 911px) {
    & {
      justify-content: space-between;
    }
  }
  @media (min-width: 1030px) {
    & {
      width: 90%;
    }
  }
  @media (min-width: 1270px) {
    & {
      width: 80%;
    }
  }
  @media (min-width: 1500px) {
    & {
      width: 98%;
    }
  }
`;

const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  const dispatch = useDispatch();
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };
  const onDelete = (id: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(deleteProjectThunk(id));
  };
  return (
    <ProjectsList title="projects">
      {projects.map(
        (project): JSX.Element => (
          <Project
            onClick={onClick}
            deleteAction={onDelete(project.id)}
            key={project.id}
            project={project}
          />
        )
      )}
    </ProjectsList>
  );
};

export default Projects;
