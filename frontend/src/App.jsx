import React from "react";
import Gallery from "./views/Gallery";
import Admin from "./views/Admin";
import Header from "./components/Header";
import Theme from "./components/Theme";
import { useEffect } from "react";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAll } from "./reducers/imageReducer";
import Notification from "./components/Notification";
import { userValidation } from "./reducers/loginReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  useEffect(() => {
    dispatch(userValidation());
  }, []);
  return (
    <div className="App" role="main">
      <Theme>
        <Header />
        <Notification />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </Theme>
    </div>
  );
};

export default App;
