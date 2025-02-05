import { MdDone } from "react-icons/md";
import { Todo } from "../models/todo";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

import { useRef, useState } from "react";

type props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoSingle({ todo, setTodos }: props) {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  function handelSave() {
    setTodos((prev) => {
      const newTodos = [...prev];
      const reqIdx = newTodos.findIndex((ele) => ele.id === todo.id);
      newTodos[reqIdx] = {
        ...newTodos[reqIdx],
        text: ref.current?.value || "",
      };
      return newTodos;
    });
  }

  function handleDel() {
    setTodos((prev) => prev.filter((ele) => ele.id != todo.id));
  }

  function handleDone() {
    setTodos((prev) => {
      const newTodos = [...prev];
      const reqIdx = newTodos.findIndex((ele) => ele.id === todo.id);
      newTodos[reqIdx] = {
        ...newTodos[reqIdx],
        isDone: !newTodos[reqIdx].isDone,
      };
      return newTodos;
    });
  }
  return (
    <div className="todo">
      {isEdit ? (
        <input type="text" defaultValue={todo.text} ref={ref} />
      ) : (
        <h3
          style={{
            textDecoration: todo.isDone ? "line-through" : "none",
          }}
        >
          {todo.text}
        </h3>
      )}
      <div className="cta">
        <MdDone onClick={handleDone} className="cta_btn" />
        <div className="edit_btn" onClick={() => setIsEdit((prev) => !prev)}>
          {isEdit ? <p onClick={handelSave}>save</p> : <FaPen />}
        </div>

        <FaRegTrashCan onClick={handleDel} className="cta_btn" />
      </div>
    </div>
  );
}

export default TodoSingle;
