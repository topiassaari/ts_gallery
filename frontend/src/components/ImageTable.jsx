import React from "react";
import { useSelector } from "react-redux";

const ImageTable = () => {
  const images = useSelector((state) => state.images);
  return (
    <div id="imgTable">
      <table>
        <tbody>
          {images
            ? images.map((img, index) => {
              return (
                <tr key={index}>
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
    </div>
  );
};
export default ImageTable;
