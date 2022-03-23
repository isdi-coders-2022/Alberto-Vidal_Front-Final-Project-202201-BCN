import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import Projects from "../components/Projects/Projects";
import { RootState } from "../redux/store";
import { Author } from "../types/projectTypes";

const Profile = (): JSX.Element => {
  const projects = useSelector((state: RootState) => state.projects);

  const token = localStorage.getItem("token");
  const userData: Author = jwtDecode(token as string);

  const userProjects = projects.filter(
    (project) => project.author.id === userData.id
  );

  return <Projects projects={userProjects} />;
};

export default Profile;
