export interface buttonProps {
  like?: boolean;
  comments?: boolean;
  share?: boolean;
  bookmark?: boolean;
}

export interface ProjectProps {
  project: {
    author: { name: string; avatar: string };
    preview: string;
  };
}
