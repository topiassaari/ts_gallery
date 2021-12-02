import React from "react";
const Post = (props) => {
  return (
    <div className="postContainer">
      <div>
        <img src={props.post.url} />
      </div>
    </div>
  );
};
export default Post;
