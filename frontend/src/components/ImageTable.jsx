/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

const ImageTable = (props) => {
  const images = useSelector((state) => state.images);
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
        {images
          ? images.map((img, index) => {
            return (
              <tr key={index} onClick={() => props.edit(img)}>
                <td>
                  <img src={img.url}></img>
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
