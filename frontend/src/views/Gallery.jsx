/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from "react";

import { useState, useEffect } from "react";
import postalService from "../services/postalService";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [lightboxCurrent, setLightboxCurrent] = useState(null);
  useEffect(() => {
    postalService.getAll().then((images) => setImages(images));
  }, []);

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
          <>
            <button style={{ zIndex: "100" }} onClick={handleLightboxPrev}>
              {"<"}
            </button>
            <div>
              <img src={lightboxCurrent.url} />
              <p>
                {lightboxCurrent.desc}, {lightboxCurrent.year}
              </p>
            </div>
            <button onClick={handleLightboxNext}>{">"}</button>
          </>
        ) : null}
      </div>
      <div className="thumbnailGrid">
        {images
          ? images.map((img, index) => {
              return (
                <div key={index} className="thumbnail">
                  <img src={img.url} onClick={() => handleLightbox(img)} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Gallery;
