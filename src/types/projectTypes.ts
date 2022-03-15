export interface ProjectsProps {
  projects: ProjectCard[];
}

export type OnClick = (event: React.MouseEvent<HTMLElement>) => void;

export interface ProjectProps {
  project: ProjectCard;
  onClick: OnClick;
  deleteAction: OnClick;
}
export interface ProjectCard {
  author: { username: string; avatar: string };
  preview: string;
  id: string;
}

export interface DBProjects {
  projects: DBProject[];
}
export interface DBProject {
  author: DBAuthor;
  likes: number;
  preview: string;
  repo: string;
  production: string;
  id: string;
}

export interface DBAuthor {
  username: string;
  avatar: string;
  id: string;
}

export interface Action {
  type: string;
}
export interface TypeLoadProjectAction extends Action {
  projects: ProjectCard[];
}

export interface TypeDeleteProjectAction extends Action {
  id: string;
}

export interface CreateProjectActionProps extends CreateProjectThunkProps {
  author: string;
}

export interface CreateProjectThunkProps {
  preview: string;
  repo: string;
  production: string;
}

export interface CreateProjectAction extends Action {
  project: CreateProjectActionProps;
}
