import HomeIcon from "@mui/icons-material/Home";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import GroupsIcon from "@mui/icons-material/Groups";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Bar = styled.header`
  padding: 0 20px;
  width: 100vw;
  height: 70px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavigationButtons = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 500px;
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
  const author = useSelector((state: RootState) => state.projects[0]?.author);

  return (
    <Bar>
      <Title>ProjectSnap</Title>
      <NavigationButtons>
        <HomeIcon sx={{ fontSize: 40 }} />
        <GroupsIcon sx={{ fontSize: 40 }} />
        <CreateNewFolderIcon sx={{ fontSize: 40 }} />
      </NavigationButtons>
      <User
        className="author-image"
        alt={author?.username}
        src={author?.avatar}
      />
    </Bar>
  );
};

export default Navbar;
