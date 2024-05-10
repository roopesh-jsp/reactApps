import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const modal = useRef();
  useEffect(() => {
    const Modal = modal.current;
    if (open) {
      Modal.showModal();
    }
    return () => Modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={modal} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
