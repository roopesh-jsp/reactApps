// import { forwardRef } from "react";
// import images from "../assets/images.js";
// const Modal = forwardRef(function Modal({ handleSubmit, close, setImg }, ref) {
//   function handleclick() {}
//   return (
//     <div className="backdrop">
//       <dialog ref={ref}>
//
//       </dialog>
//     </div>
//   );
// });
// export default Modal;

export default function Modal({ children, onClose }) {
  return (
    <div className="backdrop">
      <dialog open>
        <h1>New Challenge</h1>
        {children}
      </dialog>
    </div>
  );
}
