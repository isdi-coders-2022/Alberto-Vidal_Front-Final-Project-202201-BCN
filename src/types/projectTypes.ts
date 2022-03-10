export interface ProjectsProps {
  projects: ProjectShape[];
}

export interface ProjectProps {
  project: ProjectShape;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export interface ProjectShape {
  author: { username: string; avatar: string };
  preview: string;
  id: string;
}
