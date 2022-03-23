import HomeIcon from "@mui/icons-material/Home";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import GroupsIcon from "@mui/icons-material/Groups";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Buttons = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0 40px;
  @media (max-width: 550px) {
    & {
      justify-content: space-evenly;
      margin: 0 auto;
    }
  }
`;

const NavigationButtons = (): JSX.Element => (
  <Buttons>
    <Link to="/" title="home">
      <HomeIcon sx={{ fontSize: 40 }} />
    </Link>
    <a href="friends" title="friends">
      <GroupsIcon sx={{ fontSize: 40 }} />
    </a>
    <Link to="/new" title="new project">
      <CreateNewFolderIcon sx={{ fontSize: 40 }} />
    </Link>
  </Buttons>
);

export default NavigationButtons;
