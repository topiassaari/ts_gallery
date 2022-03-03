import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageForm from "../components/ImageForm";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ImageTable from "../components/ImageTable";
import LoginForm from "../components/LoginForm";

import { updateImage, deleteImage, addImage } from "../reducers/imageReducer";
import { userLogin } from "../reducers/loginReducer";
import { setOverlay, removeOverlay } from "../reducers/overlayReducer";

const Admin = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const overlay = useSelector((state) => state.overlay);
  const [modal, showModal] = useState(false);
  const [edit, setEdit] = useState(null);
  const newImg = () => {
    showModal(true);
    dispatch(setOverlay());
  };
  const editImage = (img) => {
    setEdit(img);
    showModal(true);
    dispatch(setOverlay());
  };
  const closeModal = () => {
    setEdit(null);
    showModal(false);
    dispatch(removeOverlay());
  };
  const handleSubmit = (img) => {
    if (img.id) {
      return dispatch(updateImage(img)).then(() => closeModal());
    }
    dispatch(addImage(img)).then(() => closeModal());
  };
  const deleteImg = (img) => {
    dispatch(deleteImage(img.id)).then(() => closeModal());
  };

  const handleLogin = async (username, password) => {
    await dispatch(userLogin(username, password));
  };
  const login = useSelector((state) => state.login);
  return (
    <>
      {!login.token ? (
        <LoginForm login={handleLogin} />
      ) : (
        <div className="adminContainer">
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
            <ImageTable images={images} edit={editImage} overlay={overlay} />
            <Button
              variant="add"
              onClick={newImg}
              //there seems to be something weird with this
              style={{ display: overlay ? "none" : "block" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
