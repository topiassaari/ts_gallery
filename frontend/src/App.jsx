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
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const fetchedPosts = await postalService.getAll();
      setPosts(fetchedPosts);
    }
    getPosts();
    console.log(posts);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery posts={posts} />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
