import { MdDone } from "react-icons/md";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { Todo } from "../models/todo";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
};

function TodoSingle({ todo, setTodos, index }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  function handleSave() {
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

  function handleDelete() {
    setTodos((prev) => prev.filter((ele) => ele.id !== todo.id));
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
    <Draggable index={index} draggableId={todo.id.toString()}>
      {(provided: DraggableProvided) => (
        <div
          className="todo"
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
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
            <div
              className="edit_btn"
              onClick={() => setIsEdit((prev) => !prev)}
            >
              {isEdit ? <p onClick={handleSave}>Save</p> : <FaPen />}
            </div>
            <FaRegTrashCan onClick={handleDelete} className="cta_btn" />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TodoSingle;
