import HomeIcon from "@mui/icons-material/Home";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import GroupsIcon from "@mui/icons-material/Groups";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { RootState } from "../../redux/store";

const Bar = styled.header`
  padding: 0 20px;
  width: 100%;
  height: 70px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
const NavigationButtons = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 500px;
  margin: 0 40px;
`;
const Title = styled.h1`
  font-family: "Sansita Swashed";
  font-size: 30px;
`;
const User = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 14px;
  border-radius: 50%;
  object-fit: cover;
  opacity: ${(props: UserProps) => (props.visible ? 1 : 0)};
`;

const Navbar = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const goToHome = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    navigate("/");
  };
  const gotoProfile = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    navigate("/profile");
  };

  return (
    <Bar>
      <a href="/" onClick={goToHome}>
        <Title>ProjectSnap</Title>
      </a>
      <NavigationButtons>
        <Link to="/" title="home">
          <HomeIcon sx={{ fontSize: 40 }} />
        </Link>
        <a href="friends" title="friends">
          <GroupsIcon sx={{ fontSize: 40 }} />
        </a>
        <Link to="/new" title="new project">
          <CreateNewFolderIcon sx={{ fontSize: 40 }} />
        </Link>
      </NavigationButtons>

      <a href="profile" onClick={gotoProfile}>
        <User
          className="author-image"
          alt={user?.username}
          src={user?.avatar}
          visible={!!user?.avatar}
        />
      </a>
    </Bar>
  );
};

export default Navbar;

interface UserProps {
  visible: boolean;
}
