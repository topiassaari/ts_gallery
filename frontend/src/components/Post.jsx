/* eslint-disable react/prop-types */
import React from "react";
const Post = (props) => {
  const handleLightbox = (id) => {
    const lightbox = document.getElementById("lightbox " + id);
    if (lightbox.classList.contains("open")) {
      lightbox.classList.remove("open");
    } else {
      lightbox.classList.add("open");
    }
  };

  return (
    <div className="Post">
      <div
        className="thumbnail"
        id={"thumbnail " + props.id}
        onClick={() => handleLightbox(props.id)}
      >
        <img src={props.url} />
      </div>
      <div
        className="lightbox"
        id={"lightbox " + props.id}
        onClick={() => handleLightbox(props.id)}
      >
        <div>
          <img src={props.url} />
          <p>
            {props.desc}, {props.year}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Post;
