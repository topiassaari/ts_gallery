/* eslint-disable react/prop-types */
import React from "react";

const ThumbnailGrid = (props) => {
  return (
    <div id="thumbnailGrid">
      {props.images.map((img, index) => {
        return (
          <div key={index} className="thumbnail">
            <img src={img.url} onClick={() => props.handleLightbox(img)} />
          </div>
        );
      })}
    </div>
  );
};
export default ThumbnailGrid;
