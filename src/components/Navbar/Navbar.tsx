import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { RootState } from "../../redux/store";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

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
  @media (max-width: 475px) {
    & nav {
      display: none;
    }
  }
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

      <NavigationButtons />

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
