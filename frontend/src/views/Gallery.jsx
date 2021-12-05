/* eslint-disable react/prop-types */
import React from "react";
import Post from "../components/Post";

const Gallery = (props) => {
  return (
    <div className="Gallery">
      {props.posts ? (
        props.posts.map((post, index) => {
          return (
            <Post
              key={index}
              id={post.id}
              url={post.url}
              desc={post.desc}
              year={post.year}
            />
          );
        })
      ) : null}
    </div>
  );
};

export default Gallery;
