import React from "react";
import "./Modal.css";

const Modal = ({ message, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="message-box">
        <p>{message}</p>
        <button className="ok-button" onClick={onConfirm}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;

