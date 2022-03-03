import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Lightbox from "../components/Lightbox";
import ThumbnailGrid from "../components/ThumbnailGrid";
import Filter from "../components/Filter";
import { setOverlay, removeOverlay } from "../reducers/overlayReducer";

const Gallery = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [lightboxCurrent, setLightboxCurrent] = useState(null);
  const [filteredImages, setFiltered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLightbox = (value) => {
    setLightboxCurrent(value);
    if (value) {
      dispatch(setOverlay());
      return setIsOpen(true);
    }
    dispatch(removeOverlay());
    setIsOpen(false);
  };
  const handleLightboxPrev = () => {
    setLightboxCurrent(
      filteredImages
        ? filteredImages[filteredImages.indexOf(lightboxCurrent) - 1]
        : images[images.indexOf(lightboxCurrent) - 1]
    );
  };
  const handleLightboxNext = () => {
    setLightboxCurrent(
      filteredImages
        ? filteredImages[filteredImages.indexOf(lightboxCurrent) + 1]
        : images[images.indexOf(lightboxCurrent) + 1]
    );
  };
  const filterGalleryByYear = (year) => {
    if (
      filteredImages &&
      filteredImages.map((img) => img.year).includes(year)
    ) {
      return setFiltered(null);
    }
    if (filteredImages) {
      return setFiltered(images.filter((imgs) => imgs.year === year));
    }
    setFiltered(images.filter((imgs) => imgs.year === year));
  };

  return (
    <>
      <Filter
        byYear={filterGalleryByYear}
        content={filteredImages}
        isOpen={isOpen}
      />
      <div className="Gallery">
        <Lightbox
          img={lightboxCurrent}
          content={filteredImages ? filteredImages : images}
          handlePrev={handleLightboxPrev}
          handleNext={handleLightboxNext}
          close={handleLightbox}
          isOpen={isOpen}
        />

        <ThumbnailGrid
          content={filteredImages ? filteredImages : images}
          openLightbox={handleLightbox}
          isOpen={isOpen}
        />
      </div>
    </>
  );
};

export default Gallery;
