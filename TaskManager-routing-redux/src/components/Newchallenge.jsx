import Modal from "./Modal";
import images from "../assets/images.js";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { challengeActions } from "../store/challengeStore.js";
export default function NewChallenge({ onClose, setImg, image }) {
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const date = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      image: {
        ...image,
      },
    };

    if (
      !data.title.trim() ||
      !data.description.trim() ||
      !data.date.trim() ||
      !data.image
    ) {
      return;
    }
    dispatch(challengeActions.onAdd(data));
    onClose();
    setImg(null);
  }
  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" required ref={title} />
        </div>
        <div className="field">
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            id="description"
            required
            ref={description}
          ></textarea>
        </div>
        <div className="field">
          <label htmlFor="date">date</label>
          <input type="date" name="date" id="date" required ref={date} />
        </div>
        <h4>pick a img</h4>
        <div className="imgs">
          {images.map((img, idx) => (
            <img
              key={idx}
              {...img}
              onClick={() => setImg(img)}
              className={img === image ? "selectedImg" : ""}
            />
          ))}
        </div>

        <div className="cta">
          <button type="button" onClick={onClose}>
            close
          </button>
          <button onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </Modal>
  );
}
