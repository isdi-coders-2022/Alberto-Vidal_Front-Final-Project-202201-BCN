import { createTheme, ThemeProvider } from "@mui/material";
import jwtDecode from "jwt-decode";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import CreateNewProject from "./pages/CreateNewProject";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { loadUserActionCreator } from "./redux/actions/user/userActionCreators";
import { loadProjectsThunk } from "./redux/thunks/project/projectThunks";
import { Author } from "./types/projectTypes";

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
    const token = localStorage.getItem("token");
    if (
      !token &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    ) {
      navigate("/login");
      return;
    }
    if (token) {
      const userToLoad: Author = jwtDecode(token);
      dispatch(loadUserActionCreator(userToLoad));
    }
  }, [dispatch, navigate]);

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
