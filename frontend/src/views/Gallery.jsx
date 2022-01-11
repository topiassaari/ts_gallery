/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Lightbox from "../components/Lightbox";
import ThumbnailGrid from "../components/ThumbnailGrid";

const Gallery = () => {
  const images = useSelector((state) => state.images);
  const [lightboxCurrent, setLightboxCurrent] = useState(null);

  useEffect(() => {
    if (document.getElementById("lightbox")) {
      document.addEventListener("keydown", handleKey);
    }
  }, [lightboxCurrent]);

  const handleKey = (event) => {
    switch (event.keyCode) {
      case 37:
        handleLightboxPrev();
        break;
      case 39:
        handleLightboxNext();
        break;
      case 27:
        handleLightbox();
        break;
    }
  };
  const handleLightbox = (value) => {
    setLightboxCurrent(value);
  };
  const handleLightboxPrev = () => {
    setLightboxCurrent(images[images.indexOf(lightboxCurrent) - 1]);
  };
  const handleLightboxNext = () => {
    setLightboxCurrent(images[images.indexOf(lightboxCurrent) + 1]);
  };
  return (
    <div className="Gallery">
      <div
        id="lightbox"
        style={lightboxCurrent ? { display: "flex" } : { display: "none" }}
      >
        {lightboxCurrent ? (
          <Lightbox
            img={lightboxCurrent}
            images={images}
            handlePrev={handleLightboxPrev}
            handleNext={handleLightboxNext}
            close={handleLightbox}
          />
        ) : null}
      </div>

      {images ? (
        <ThumbnailGrid images={images} handleLightbox={handleLightbox} />
      ) : null}
    </div>
  );
};

export default Gallery;
