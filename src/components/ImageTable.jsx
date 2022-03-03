/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";

const ImageTable = (props) => {
  const keydown = (e, img) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      props.edit(img);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <td>img</td>
          <td>desc</td>
          <td>year</td>
        </tr>
      </thead>
      <tbody>
        {props.images
          ? props.images.map((img, index) => {
              return (
                <tr
                  key={index}
                  onKeyDown={(ev) => keydown(ev, img)}
                  onClick={() => props.edit(img)}
                  tabIndex={props.overlay ? -1 : 0}
                >
                  <td>
                    <img src={img.url} alt=""></img>
                  </td>
                  <td>{img.desc}</td>
                  <td>{img.year}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};
export default ImageTable;

ImageTable.propTypes = {
  images: PropTypes.array,
  edit: PropTypes.func,
  overlay: PropTypes.bool,
};
