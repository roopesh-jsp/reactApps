import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  return createPortal(
    <dialog ref={ref}>
      {children}
      <form method="dialog">
        <button>cancle</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
