import React from "react";
import { useState } from "react";
import NewPostForm from "../components/NewPostForm";
import EditPost from "./EditPost";
import Button from "./Button";
import Modal from "./Modal";
import ImageTable from "./ImageTable";

const AdminPanel = () => {
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
        <ImageTable edit={editImage} />
        <Button variant="add" onClick={addImage} />
      </div>
    </>
  );
};
export default AdminPanel;
