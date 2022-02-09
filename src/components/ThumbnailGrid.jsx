import React from "react";
import PropTypes from "prop-types";

const ThumbnailGrid = (props) => {
  const keydown = (e, img) => {
    if (e.key === "Enter" || e.keyCode === 13) {
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
            <img
              src={img.url}
              alt={"Thumbnail of gallery image: " + img.desc}
            />
          </button>
        );
      })}
    </div>
  ) : null;
};
export default ThumbnailGrid;

ThumbnailGrid.propTypes = {
  content: PropTypes.array,
  openLightbox: PropTypes.func,
  isOpen: PropTypes.bool,
};
