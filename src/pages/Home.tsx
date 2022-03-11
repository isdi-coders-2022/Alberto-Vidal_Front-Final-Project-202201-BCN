import { useSelector } from "react-redux";
import Projects from "../components/Projects";
import { RootState } from "../redux/store";

const Home = () => {
  const projects = useSelector((state: RootState) => state.projects);

  return <Projects projects={projects} />;
};

export default Home;
