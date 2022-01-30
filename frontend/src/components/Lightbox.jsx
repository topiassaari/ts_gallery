/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import { useEffect } from "react";

const Lightbox = (props) => {
  const handleKey = (event) => {
    switch (event.keyCode) {
      case 37:
        if (props.content.indexOf(props.img) !== 0) {
          return props.handlePrev();
        }
        break;
      case 39:
        if (props.content.indexOf(props.img) !== props.content.length - 1) {
          return props.handleNext();
        }
        break;
      case 27:
        return props.close();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });
  return props.img ? (
    <div id="lightbox">
      <div id="content">
        <div id="lightboxClose">
          <Button
            variant="close"
            id="close"
            onClick={() => props.close()}
            tabIndex={0}
          />
        </div>
        <img src={props.img.url} alt="" />
        <div>
          <div>
            <p>
              {props.img.desc}, {props.img.year}
            </p>
            <div>
              <Button
                variant="prev"
                id="prev"
                disabled={props.content.indexOf(props.img) === 0}
                onClick={() => props.handlePrev()}
                tabIndex={0}
              />
              <Button
                variant="next"
                disabled={
                  props.content.indexOf(props.img) === props.content.length - 1
                }
                id="next"
                onClick={() => props.handleNext()}
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="background" />
    </div>
  ) : null;
};
export default Lightbox;
