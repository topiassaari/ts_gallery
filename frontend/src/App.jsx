import React from "react";
import Gallery from "./views/Gallery";
import Admin from "./views/Admin";
import Header from "./components/Header";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

const App = () => {
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
