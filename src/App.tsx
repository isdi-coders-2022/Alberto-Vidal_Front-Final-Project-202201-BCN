import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CreateNewProject from "./pages/CreateNewProject";
import Home from "./pages/Home";
import { loadProjectsThunk } from "./redux/thunks/projectThunks";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjectsThunk());
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateNewProject />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
