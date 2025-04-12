import React from "react";
import "./model.css";

const Model= ({ message, onConfirm }) => {
  return (
    <div className="message-box">
      <p>{message}</p>
      <button className="ok-button" onClick={onConfirm}>
        OK
      </button>
    </div>
  );
}

export default Model;
