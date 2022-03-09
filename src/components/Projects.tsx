import { ProjectsProps } from "../types/projectTypes";
import Project from "./Project";

const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <ul>
      {projects.map((project): JSX.Element => {
        return <Project project={project} />;
      })}
    </ul>
  );
};

export default Projects;
