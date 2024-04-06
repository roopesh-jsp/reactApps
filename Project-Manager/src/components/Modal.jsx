import { forwardRef, useRef, useImperativeHandle } from "react";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return (
    <dialog ref={modal} className=" backdrop:stone-900  p-9 rounded">
      {children}
      <form method="dialog" className="mt-5 ml-16">
        <Button>Close</Button>
      </form>
    </dialog>
  );
});

export default Modal;
