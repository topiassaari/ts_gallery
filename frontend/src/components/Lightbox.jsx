/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

const Lightbox = (props) => {
  return (
    <div
      id="lightbox"
      style={props.img ? { display: "flex" } : { display: "none" }}
    >
      <div id="content">
        <div id="lightboxClose">
          <Button variant="close" onClick={() => props.close()} />
        </div>
        <img src={props.img.url} />
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
              />
              <Button
                variant="next"
                disabled={
                  props.content.indexOf(props.img) === props.content.length - 1
                }
                id="next"
                onClick={() => props.handleNext()}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="background" onClick={() => props.close()} />
    </div>
  );
};
export default Lightbox;
