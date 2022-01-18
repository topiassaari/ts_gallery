import React from "react";
import { useState } from "react";
import ImageForm from "./ImageForm";
import Button from "./Button";
import Modal from "./Modal";
import ImageTable from "./ImageTable";

const AdminPanel = () => {
  const [modal, showModal] = useState(false);
  const [edit, setEdit] = useState(null);
  const addImage = () => {
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
  return (
    <>
      <Modal open={modal} onClose={closeModal}>
        {modal ? (
          <ImageForm img={edit ? edit : null} onClose={closeModal} />
        ) : null}
      </Modal>
      <div id="imgTable">
        <ImageTable edit={editImage} />
        <Button variant="add" onClick={addImage} />
      </div>
    </>
  );
};
export default AdminPanel;
