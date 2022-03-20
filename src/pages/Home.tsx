import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import { RootState } from "../redux/store";
import { loadProjectsThunk } from "../redux/thunks/project/projectThunks";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadProjectsThunk(navigate));
  }, [dispatch, navigate]);
  const projects = useSelector((state: RootState) => state.projects);

  return <Projects projects={projects} />;
};

export default Home;
