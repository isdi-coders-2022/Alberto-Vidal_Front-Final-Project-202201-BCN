import styled from "styled-components";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  BookmarkBorder,
} from "@mui/icons-material";
import { ProjectProps } from "../types/projectTypes";

const Card = styled.li`
  margin: 10px;
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

const CardButton = styled.a`
  border: none;
  margin: 10px;
  height: 48px;
  width: 48px;
  color: inherit;

  &:nth-last-child(1) {
    margin-left: auto;
  }
`;

const Project = ({ project, onClick }: ProjectProps): JSX.Element => {
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
        <CardButton onClick={onClick} href="like" title="like">
          <FavoriteBorder sx={{ fontSize: 40 }} />
        </CardButton>
        <CardButton onClick={onClick} href="comment" title="comment">
          <ChatBubbleOutline sx={{ fontSize: 40 }} />
        </CardButton>
        <CardButton onClick={onClick} href="share" title="share">
          <Share sx={{ fontSize: 40 }} />
        </CardButton>
        <CardButton onClick={onClick} href="bookmark" title="bookmark">
          <BookmarkBorder sx={{ fontSize: 40 }} />
        </CardButton>
      </div>
    </Card>
  );
};

export default Project;
