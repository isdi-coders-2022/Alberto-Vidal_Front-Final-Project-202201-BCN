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

export interface ProjectsResponse {
  projects: ProjectResponse[];
}
export interface ProjectResponse {
  author: Author;
  likes: number;
  preview: string;
  repo: string;
  production: string;
  id: string;
}

export interface Author {
  username: string;
  avatar: string;
  id: string;
}
