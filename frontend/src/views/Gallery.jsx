/* eslint-disable react/prop-types */
import React from "react";
import Image from "../components/Image";

const Gallery = (props) => {
  return (
    <div className="Gallery">
      {props.images
        ? props.images.map((img, index) => {
          return (
            <Image
              key={index}
              id={img.id}
              url={img.url}
              desc={img.desc}
              year={img.year}
            />
          );
        })
        : null}
    </div>
  );
};

export default Gallery;
