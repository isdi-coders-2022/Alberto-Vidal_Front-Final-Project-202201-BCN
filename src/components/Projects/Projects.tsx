import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteProjectThunk } from "../../redux/thunks/project/projectThunks";
import { ProjectsProps } from "../../types/projectTypes";
import Project from "../Project/Project";

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
  console.log(projects);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = (id: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(`/edit/${id}`);
  };
  const onDelete = (id: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(deleteProjectThunk(id, navigate));
  };
  return (
    <ProjectsList title="projects">
      {projects.map(
        (project): JSX.Element => (
          <Project
            onClick={onClick(project.id)}
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
