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

  useEffect(() => {
    if (document.getElementById("lightbox")) {
      document.addEventListener("keydown", handleKey);
    }
  }, [lightboxCurrent]);

  const handleLightbox = (value) => {
    setLightboxCurrent(value);
  };
  const handleLightboxPrev = () => {
    setLightboxCurrent(images[images.indexOf(lightboxCurrent) - 1]);
  };
  const handleLightboxNext = () => {
    setLightboxCurrent(images[images.indexOf(lightboxCurrent) + 1]);
  };
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
  return (
    <div className="Gallery">
      <div
        id="lightbox"
        style={lightboxCurrent ? { display: "flex" } : { display: "none" }}
      >
        {lightboxCurrent ? (
          <>
            <div>
              <img src={lightboxCurrent.url} onClick={() => handleLightbox()} />
              <div>
                <div>
                  <p>
                    {lightboxCurrent.desc}, {lightboxCurrent.year}
                  </p>
                  <div>
                    <button
                      id="prev"
                      disabled={images.indexOf(lightboxCurrent) === 0}
                      onClick={handleLightboxPrev}
                    >
                      {"<"}
                    </button>
                    <button
                      disabled={
                        images.indexOf(lightboxCurrent) === images.length - 1
                      }
                      id="next"
                      onClick={handleLightboxNext}
                    >
                      {">"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
