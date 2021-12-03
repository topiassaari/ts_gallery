/* eslint-disable react/prop-types */
import React from "react";
const Post = (props) => {
  return (
    <div className="Post">
      <div>
        <img src={props.url} />
        <p>{props.desc}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};
export default Post;
