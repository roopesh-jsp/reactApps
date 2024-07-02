import React, { useRef } from "react";
import Modal from "./util/Modal";
import { useDispatch } from "react-redux";
import { employeActions } from "../store/EmployesStore";
export default function NewEmp() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  function handleClick() {
    modalRef.current.showModal();
  }
  function handleSubmit(e) {
    modalRef.current.close();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.name) {
      dispatch(employeActions.onAdd(data));
    }
    e.currentTarget.reset();
  }
  return (
    <div>
      <button onClick={handleClick}>add employee</button>
      <Modal ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">email :</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="salary">salary :</label>
            <input type="salary" name="salary" />
          </div>
          <div>
            <label htmlFor="image">image :</label>
            <input type="text" name="image" />
          </div>
          <button>upload</button>
        </form>
      </Modal>
    </div>
  );
}
