import React from "react";
import { useState } from "react";
import ImageForm from "./ImageForm";
import Button from "./Button";
import Modal from "./Modal";
import ImageTable from "./ImageTable";
import { useDispatch, useSelector } from "react-redux";
import { updateImage, deleteImage, addImage } from "../reducers/imageReducer";
import { setNotification } from "../reducers/notificationReducer";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const [modal, showModal] = useState(false);
  const [edit, setEdit] = useState(null);
  const newImg = () => {
    showModal(true);
  };
  const editImage = (img) => {
    setEdit(img);
    showModal(true);
  };
  const closeModal = () => {
    setEdit(null);
    showModal(false);
  };
  const handleSubmit = async (img) => {
    if (img.id) {
      return dispatch(updateImage(img)).then(() => {
        dispatch(setNotification("img updated", "success", 5));
        closeModal();
      });
    }
    dispatch(addImage(img)).then(() => {
      dispatch(setNotification("img added", "success", 5));
      closeModal();
    });
  };
  const deleteImg = async (img) => {
    dispatch(deleteImage(img.id)).then(() => {
      dispatch(setNotification("img deleted", "success", 5));
      closeModal();
    });
  };
  return (
    <>
      <Modal open={modal} onClose={closeModal}>
        {modal ? (
          <ImageForm
            img={edit ? edit : null}
            handleSubmit={handleSubmit}
            deleteImg={deleteImg}
          />
        ) : null}
      </Modal>
      <div id="imgTable">
        <ImageTable images={images} edit={editImage} />
        <Button variant="add" onClick={newImg} />
      </div>
    </>
  );
};
export default AdminPanel;
