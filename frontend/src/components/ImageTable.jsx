/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from "react";

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
                <tr key={index} onClick={() => props.edit(img)}>
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
