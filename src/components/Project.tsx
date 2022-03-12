import styled from "styled-components";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  BookmarkBorder,
  RemoveCircleOutline,
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
    &::before {
      display: block;
      padding: 10px;
      height: 221px;
      width: 416px;
    }
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

const DeleteButton = styled.a`
  color: inherit;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const Project = ({ project, onClick }: ProjectProps): JSX.Element => (
  <Card>
    <div className="author">
      <img
        className="author-image"
        alt={project.author.username}
        src={project.author.avatar}
      />
      <p className="author-name">{project.author.username}</p>
    </div>
    <DeleteButton className="dlete-button" href="delete" title="delete">
      <RemoveCircleOutline sx={{ fontSize: 40 }} />
    </DeleteButton>
    <img
      className="preview"
      width="416"
      height="221"
      alt={`${project.author.username} project preview`}
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

export default Project;
