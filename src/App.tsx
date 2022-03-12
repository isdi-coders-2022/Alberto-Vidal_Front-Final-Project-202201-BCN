import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { loadProjectsThunk } from "./redux/thunks/projectThunks";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
