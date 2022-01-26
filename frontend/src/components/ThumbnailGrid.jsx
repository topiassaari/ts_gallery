/* eslint-disable react/prop-types */
import React from "react";

const ThumbnailGrid = (props) => {
  const keydown = (e, img) => {
    if (e.code === "Enter") {
      props.openLightbox(img);
    }
  };
  return props.content ? (
    <div id="thumbnailGrid">
      {props.content.map((img, index) => {
        return (
          <button
            aria-label="gallery image"
            key={index}
            className="thumbnail"
            onClick={() => props.openLightbox(img)}
            onKeyDown={(e) => keydown(e, img)}
            tabIndex={props.isOpen ? -1 : 0}
          >
            <img src={img.url} alt="" />
          </button>
        );
      })}
    </div>
  ) : null;
};
export default ThumbnailGrid;
