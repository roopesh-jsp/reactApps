import { useRef, useState } from "react";
import Modal from "./Modal";
import classes from "./header.module.css";
import { useDispatch } from "react-redux";
import { challengeActions } from "../store/challengeStore";
export default function Header() {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    let data = Object.fromEntries(formdata);
    event.currentTarget.reset();
    data = {
      ...data,
      image: {
        ...selectedImg,
      },
    };
    console.log(data);
    dispatch(challengeActions.onAdd(data));
  }
  function handleClose() {
    modalRef.current.close();
  }
  function handleOpen() {
    modalRef.current.showModal();
  }

  return (
    <>
      <Modal
        handleSubmit={handleSubmit}
        ref={modalRef}
        onClose={handleClose}
        close={handleClose}
        setImg={setSelectedImg}
      />
      <header className={classes.header}>
        <h1>challenges</h1>
        <button onClick={handleOpen}>add challenge</button>
      </header>
    </>
  );
}
