import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Project({ addingNew, onCancle }) {
  const modal = useRef();
  const name = useRef();
  const description = useRef();
  const date = useRef();
  function handleSave() {
    const newName = name.current.value;
    const newDesc = description.current.value;
    const newDate = date.current.value;

    if (
      newDate.trim() === "" ||
      newDesc.trim() === "" ||
      newName.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    addingNew({
      name: newName,
      description: newDesc,
      date: newDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="font-semibold uppercase">INCOMPLETE</h2>
        <p className="text-md  mt-3">you have left one or more feilds empty</p>
        <p className="text-md ">please fill all the details</p>
      </Modal>
      <div className="w-[35rem]">
        <menu className="flex gap-10 justify-end my-10 items-center">
          <li>
            <button onClick={onCancle}>Cancel</button>
          </li>
          <li>
            <button
              className="bg-stone-600 p-2 rounded-md text-stone-100 w-20 hover:text-stone-200"
              onClick={handleSave}
            >
              save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={name} label="name" type="text" />
          <Input ref={description} label="discription" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
