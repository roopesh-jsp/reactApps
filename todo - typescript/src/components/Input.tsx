import { useRef } from "react";
import { Todo } from "../models/todo";

type props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
function Input({ setTodos }: props) {
  const ref = useRef<HTMLInputElement>(null);
  function handelAddTodo(e: React.FormEvent) {
    e.preventDefault();

    if (ref.current?.value) {
      const inputValue = ref.current?.value;
      setTodos((prev) => [
        ...prev,
        { id: prev.length + 1, text: inputValue, isDone: false },
      ]);
      ref.current.value = "";
    }
  }
  return (
    <form id="input" onSubmit={handelAddTodo}>
      <input type="text" ref={ref} placeholder="add ..." />
      <button> add</button>
    </form>
  );
}

export default Input;
