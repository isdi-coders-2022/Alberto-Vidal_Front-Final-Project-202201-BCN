import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { RootState } from "./redux/store";
import { loadProjectsThunk } from "./redux/thunks/projectThunks";

const App = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects);
  useEffect(() => {
    dispatch(loadProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Projects projects={projects} />
    </>
  );
};

export default App;
