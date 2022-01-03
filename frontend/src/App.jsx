import React from "react";
import Gallery from "./views/Gallery";
import Admin from "./views/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import postalService from "./services/postalService";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [images, setImages] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    postalService.getAll().then((images) => setImages(images));
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const login = JSON.parse(loggedUserJSON);
      setToken(login.token);
      postalService.setToken(login.token);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery images={images} />} />
        <Route path="admin" element={<Admin token={token} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
