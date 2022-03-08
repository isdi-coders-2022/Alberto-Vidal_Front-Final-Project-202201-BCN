import styled from "styled-components";

type buttonProps = {
  like?: boolean;
  comments?: boolean;
  share?: boolean;
  bookmark?: boolean;
};

const Card = styled.li`
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
    if (props.bookmark) return "src/assets/bookmark.png";
    return "";
  }});
`;

const Project = (): JSX.Element => {
  const onClick = (): null => {
    return null;
  };
  return (
    <Card>
      <div className="author">
        <img
          className="author-image"
          alt="author"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
        <p className="author-name">author</p>
      </div>
      <img
        className="preview"
        width={416}
        height={221}
        alt="preview"
        src="https://i.pinimg.com/564x/19/11/c3/1911c3e6a20b63d92a6f694fe988aa62.jpg"
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
