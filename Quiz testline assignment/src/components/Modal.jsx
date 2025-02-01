import React from "react";

export default function Modal({ title, children, closeModal }) {
  return (
    <div
      className="overlay"
      onClick={() => {
        closeModal();
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
}
