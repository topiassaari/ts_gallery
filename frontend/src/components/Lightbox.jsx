/* eslint-disable react/prop-types */
import React from "react";

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
              <button
                id="prev"
                disabled={props.images.indexOf(props.img) === 0}
                onClick={props.handlePrev}
              >
                {"<"}
              </button>
              <button
                disabled={
                  props.images.indexOf(props.img) === props.images.length - 1
                }
                id="next"
                onClick={props.handleNext}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lightbox;
