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

const Admin = () => {
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
            <ImageTable images={images} edit={editImage} />
            <Button variant="add" onClick={newImg} />
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
