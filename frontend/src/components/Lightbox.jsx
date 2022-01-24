/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import { useEffect } from "react";

const Lightbox = (props) => {
  useEffect(() => {
    const handleKey = (event) => {
      switch (event.keyCode) {
        case 37:
          if (props.content.indexOf(props.img) !== 0) {
            props.handlePrev();
          }
          break;
        case 39:
          if (props.content.indexOf(props.img) !== props.content.length - 1) {
            props.handleNext();
          }
          break;
        case 27:
          return props.close();
      }
    };
    if (document.getElementById("lightbox")) {
      document.addEventListener("keydown", handleKey);
      return () => {
        document.removeEventListener("keydown", handleKey);
      };
    }
  });
  return (
    <div
      id="lightbox"
      style={props.img ? { display: "flex" } : { display: "none" }}
    >
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
                data-testid="prev"
                disabled={props.content.indexOf(props.img) === 0}
                onClick={() => props.handlePrev()}
                tabIndex={0}
              />
              <Button
                variant="next"
                test-id="next"
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
      <div
        role="button"
        tabIndex={0}
        id="background"
        onClick={() => props.close()}
        onKeyDown={() => props.close()}
      />
    </div>
  );
};
export default Lightbox;
