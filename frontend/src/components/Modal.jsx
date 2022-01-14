/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

const Modal = (props) => {
  return (
    <div
      className={"modalContainer"}
      style={{ display: props.open ? "block" : "none" }}
    >
      <div className="modal">
        <div className="modalHeader">
          <Button variant="close" onClick={() => props.onClose()} />
        </div>
        {props.children}
      </div>
    </div>
  );
};
export default Modal;
