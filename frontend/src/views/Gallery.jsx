import React from "react";
import { useState, useEffect } from "react";
import postalService from "./services/postalService";
import { Post } from "./component/Post";

const Gallery = () => {
  const [posts, setPosts] = useState({});

  const getPosts = () => {
    postalService.getAll().then((returned) => {
      console.log(returned);
      returned.forEach((post) => {
        if (posts) {
          setPosts(...posts, {
            url: post.url,
            desc: post.desc,
            year: post.year,
            id: post.id,
          });
        }
      });
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="Gallery">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Gallery;
