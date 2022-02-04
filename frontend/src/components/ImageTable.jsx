/* eslint-disable indent */

import React from "react";
import PropTypes from "prop-types";

const ImageTable = (props) => {
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
                <tr key={index} onClick={() => props.edit(img)} tabIndex={0}>
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
  images: PropTypes.object,
  edit: PropTypes.func,
};
