/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

const Lightbox = (props) => {
  return (
    <>
      <div>
        <img src={props.img.url} onClick={() => props.close()} />
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
                onClick={props.handlePrev}
              />
              <Button
                variant="next"
                disabled={
                  props.content.indexOf(props.img) === props.content.length - 1
                }
                id="next"
                onClick={props.handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lightbox;
