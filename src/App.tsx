import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import CreateNewProject from "./pages/CreateNewProject";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { loadProjectsThunk } from "./redux/thunks/project/projectThunks";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (
      !localStorage.getItem("token") &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    )
      navigate("/login");
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateNewProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
        draggable
      />
    </ThemeProvider>
  );
};

export default App;
