import React from "react";
import Gallery from "./views/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import postalService from "./services/postalService";
import "./App.css";

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
      <Gallery posts={posts} />
      <Footer />
    </div>
  );
};

export default App;
