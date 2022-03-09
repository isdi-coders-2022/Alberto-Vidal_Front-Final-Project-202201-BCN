import styled from "styled-components";
import { buttonProps, ProjectProps } from "../types/projectTypes";

const Card = styled.li`
  list-style: none
  position: relative;
  width: 416px;
  height: 377px;
  background-color: #ffffff26;
  border-radius: 10px;
  & .author {
    height: 78px;
    width: 100%;
    display: flex;
    align-items: center;

    & .author-name {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      margin-left: 24px;
    }
    & .author-image {
      width: 50px;
      height: 50px;
      margin-left: 14px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  & .preview {
    object-fit: cover;
  }

  & .buttons {
    display: flex;
    height: 78px;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
`;

const CardButton = styled.button`
  border: none;
  margin: 10px;
  margin-left: ${(props: buttonProps) => {
    return props.bookmark ? "auto" : "10px";
  }};
  height: 48px;
  width: 48px;
  background: url(${(props: buttonProps) => {
    if (props.like) return "src/assets/heart-outline.png";
    if (props.comments) return "src/assets/comment-outline.png";
    if (props.share) return "src/assets/share-variant-outline.png";
    return "src/assets/bookmark.png";
  }});
`;

const Project = ({ project }: ProjectProps): JSX.Element => {
  const onClick = (): null => {
    return null;
  };
  return (
    <Card>
      <div className="author">
        <img
          className="author-image"
          alt="author"
          src={project.author.avatar}
        />
        <p className="author-name">{project.author.name}</p>
      </div>
      <img
        className="preview"
        width={416}
        height={221}
        alt="preview"
        src={project.preview}
      />
      <div className="buttons">
        <CardButton like title="like" onClick={onClick} />
        <CardButton comments title="comments" onClick={onClick} />
        <CardButton share title="share" onClick={onClick} />
        <CardButton bookmark title="bookmark" onClick={onClick} />
      </div>
    </Card>
  );
};

export default Project;
