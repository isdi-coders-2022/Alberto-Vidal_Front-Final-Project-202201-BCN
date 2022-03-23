import styled from "styled-components";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const Bar = styled.footer`
  width: 100%;
  possition: fixed;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 70px;
  background-color: #222;
  & a {
    color: #f0f0f0;
  }
  @media (min-width: 475px) {
    & {
      display: none;
    }
  }
`;

const BottomBar = (): JSX.Element => (
  <Bar>
    <NavigationButtons />
  </Bar>
);

export default BottomBar;
