import React from "react";
import Gallery from "./views/Gallery";
import Admin from "./views/Admin";
import Header from "./components/Header";
import { useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAll } from "./reducers/imageReducer";
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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
