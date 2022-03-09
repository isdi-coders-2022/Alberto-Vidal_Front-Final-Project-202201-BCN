export interface ProjectsProps {
  projects: ProjectShape[];
}

export interface ProjectProps {
  project: ProjectShape;
}

export interface ProjectShape {
  author: { name: string; avatar: string };
  preview: string;
}
