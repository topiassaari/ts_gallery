/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Lightbox from "../components/Lightbox";
import ThumbnailGrid from "../components/ThumbnailGrid";
import Filter from "../components/Filter";

const Gallery = () => {
  const images = useSelector((state) => state.images);
  const [lightboxCurrent, setLightboxCurrent] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
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
    setLightboxCurrent(
      isFiltered
        ? filtered[filtered.indexOf(lightboxCurrent) - 1]
        : images[images.indexOf(lightboxCurrent) - 1]
    );
  };
  const handleLightboxNext = () => {
    setLightboxCurrent(
      isFiltered
        ? filtered[filtered.indexOf(lightboxCurrent) + 1]
        : images[images.indexOf(lightboxCurrent) + 1]
    );
  };
  const filterGalleryByYear = (year) => {
    if (filtered && filtered.map((img) => img.year).includes(year)) {
      setIsFiltered(false);
      return setFiltered(null);
    }
    if (filtered) {
      return setFiltered(images.filter((imgs) => imgs.year === year));
    }
    setIsFiltered(true);
    setFiltered(images.filter((imgs) => imgs.year === year));
  };

  return (
    <>
      <Filter byYear={filterGalleryByYear} filtered={filtered} />
      <div className="Gallery">

          {lightboxCurrent ? (
            <Lightbox
              img={lightboxCurrent}
              content={isFiltered ? filtered : images}
              handlePrev={handleLightboxPrev}
              handleNext={handleLightboxNext}
              close={handleLightbox}
            />
          ) : null}

        {images ? (
          <ThumbnailGrid
            content={isFiltered ? filtered : images}
            handleLightbox={handleLightbox}
          />
        ) : null}
      </div>
    </>
  );
};

export default Gallery;
