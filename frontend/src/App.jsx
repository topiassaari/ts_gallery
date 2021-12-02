import React from "react";
import Gallery from "./views/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
