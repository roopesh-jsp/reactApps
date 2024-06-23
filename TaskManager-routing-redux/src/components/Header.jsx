import { useRef, useState } from "react";
import Modal from "./Modal";
import classes from "./header.module.css";
import { useDispatch } from "react-redux";
import { challengeActions } from "../store/challengeStore";
import NewChallenge from "./Newchallenge";
export default function Header() {
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(null);

  const [isModalavisible, setIsmodalVisible] = useState(false);
  function handleClick() {
    setIsmodalVisible(false);
    setSelectedImg(null);
  }
  // const modalRef = useRef();
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formdata = new FormData(event.currentTarget);
  //   let data = Object.fromEntries(formdata);
  //   event.currentTarget.reset();
  //   data = {
  //     ...data,
  //     image: {
  //       ...selectedImg,
  //     },
  //   };
  //   console.log(data);
  //   dispatch(challengeActions.onAdd(data));
  // }
  // function handleClose() {
  //   modalRef.current.close();
  // }
  // function handleOpen() {
  //   modalRef.current.showModal();
  // }

  return (
    <>
      {/* <Modal
        handleSubmit={handleSubmit}
        ref={modalRef}
        onClose={handleClose}
        close={handleClose}
        setImg={setSelectedImg}
      /> */}
      {isModalavisible && (
        <NewChallenge
          onClose={handleClick}
          setImg={setSelectedImg}
          image={selectedImg}
        />
      )}
      <header className={classes.header}>
        <h1>challenges</h1>
        <button onClick={() => setIsmodalVisible(true)}>add challenge</button>
      </header>
    </>
  );
}
