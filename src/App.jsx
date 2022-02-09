import React from "react";
import Gallery from "./views/Gallery";
import Admin from "./views/Admin";
import Header from "./components/Header";

import { useEffect } from "react";
import "./styles/light.scss";
import "./styles/dark.scss";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAll } from "./reducers/imageReducer";
import Notification from "./components/Notification";
import { userValidation } from "./reducers/loginReducer";
import { lightTheme } from "./reducers/themeReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  useEffect(() => {
    dispatch(userValidation());
    dispatch(lightTheme());
  }, []);
  return (
    <div className="App" role="main">
      <Header />
      <Notification />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;