import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewPostForm from "../components/NewPostForm";
import EditPost from "./EditPost";
import Button from "./Button";
import Modal from "./Modal";

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
      <Modal open={showNewModal} onClose={() => setNewModal(false)}>
        {showNewModal ? <NewPostForm /> : null}
      </Modal>
      <Modal open={showEditModal} onClose={() => closeEditModal()}>
        {showEditModal ? (
          <EditPost img={editImg} onClose={closeEditModal} />
        ) : null}
      </Modal>
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
        <Button variant="add" onClick={addImage} />
      </div>
    </>
  );
};
export default ImageTable;
