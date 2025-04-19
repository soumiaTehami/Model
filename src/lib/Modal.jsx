import React from "react";
import "./Modal.css";

const Modal= ({ message, onConfirm }) => {
  return (
    <div className="message-box">
      <p>{message}</p>
      <button className="ok-button" onClick={onConfirm}>
        OK
      </button>
    </div>
  );
}

export default Modal;
