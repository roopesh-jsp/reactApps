import { forwardRef } from "react";
import images from "../assets/images.js";
const Modal = forwardRef(function Modal({ handleSubmit, close, setImg }, ref) {
  function handleclick() {}
  return (
    <div className="backdrop">
      <dialog ref={ref}>
        <form onSubmit={handleSubmit} id="form">
          <div className="field">
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="field">
            <label htmlFor="description">description</label>
            <textarea name="description" id="description"></textarea>
          </div>
          <div className="field">
            <label htmlFor="date">date</label>
            <input type="date" name="date" id="date" />
          </div>
          <h4>pick a img</h4>
          <div className="imgs">
            {images.map((img, idx) => (
              <img key={idx} {...img} onClick={() => setImg(img)} />
            ))}
          </div>
          <div className="cta">
            <button type="button" onClick={close}>
              close
            </button>
            <button type="submit" onClick={close}>
              submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
});
export default Modal;
