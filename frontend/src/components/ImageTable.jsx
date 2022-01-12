import React from "react";
import { useSelector } from "react-redux";
import NewPostForm from "../components/NewPostForm";
import { useState } from "react";
import EditPost from "./EditPost";

const ImageTable = () => {
  const images = useSelector((state) => state.images);
  const [showNewModal, setNewModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [editImg, setEditImg] = useState(null);
  const addImage = async () => {
    setNewModal(true);
  };
  const editImage = async (img) => {
    setEditImg(img);
    setEditModal(true);
  };
  const closeEditModal = async () => {
    setEditModal(false);
    setEditImg(null);
  };
  return (
    <>
      <div id="modal" style={{ display: showNewModal ? "block" : "none" }}>
        <div id="header">
          <button style={{ margin: "12px" }} onClick={() => setNewModal(false)}>
            x
          </button>
        </div>
        <NewPostForm />
      </div>
      <div id="modal" style={{ display: showEditModal ? "block" : "none" }}>
        <div id="header">
          <button style={{ margin: "12px" }} onClick={closeEditModal}>
            x
          </button>
        </div>
        {editImg ? <EditPost img={editImg} onClose={closeEditModal} /> : null}
      </div>
      <div id="imgTable">
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
                  <tr key={index} onClick={() => editImage(img)}>
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
        <button id="addButton" onClick={addImage}>
          +
        </button>
      </div>
    </>
  );
};
export default ImageTable;
