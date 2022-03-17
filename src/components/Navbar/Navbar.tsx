import HomeIcon from "@mui/icons-material/Home";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import GroupsIcon from "@mui/icons-material/Groups";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
`;

const Navbar = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Bar>
      <Title>ProjectSnap</Title>
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
      <User className="author-image" alt={user?.username} src={user?.avatar} />
    </Bar>
  );
};

export default Navbar;
